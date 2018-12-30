import { prisma, Prisma } from "./prisma-client";
import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./typeDefs";
import { GraphQLError } from "graphql";

interface Context {
  prisma: Prisma;
}

const queryDefs = `
  type Query {
    user(id: ID!): User
    habit(id: ID!): Habit
    avatars: [Avatar!]!
  }

  input HabitCreateInput {
    task: String!
    avatarName: String!
    avatarColor: String!
    frequency: HabitFrequency!
    weeklyCount: Int
    weeklySchedule: [HabitSchedule!]
    user: ID!
  }

  type Mutation {
    createUser(name: String!): User
    createHabit(data: HabitCreateInput!): Habit
    createActivity(user: ID!, habit: ID!): Activity!
  }
`;

const resolvers = {
  Query: {
    user(parent, args, context: Context) {
      return context.prisma.user({ id: args.id });
    },
    habit(parent, args, context: Context) {
      // @TODO Authenticate
      return context.prisma.habit({ id: args.id });
    },
    avatars(parent, args, context: Context) {
      return context.prisma.avatars();
    }
  },
  Mutation: {
    createUser(parent, args, context: Context) {
      return context.prisma.createUser({ name: args.name, email: args.email });
    },
    createHabit(parent, args, context: Context) {
      const { user, weeklySchedule, ...habit } = args.data;
      return context.prisma.createHabit({
        ...habit,
        user: {
          connect: { id: user }
        },
        weeklySchedule: {
          set: weeklySchedule
        }
      });
    },
    async createActivity(parent, args, context: Context) {
      const { user, habit } = args;
      const timestamp = new Date().toISOString();

      const lastActivities = await context.prisma.activities({
        where: {
          user: { id: user },
          habit: { id: habit }
        },
        orderBy: "createdAt_DESC",
        first: 1
      });

      // check if an activity is already created for today
      // @TODO: Improve this to account for time zone
      const last = lastActivities && lastActivities[0];
      if (last && last.timestamp.split("T")[0] === timestamp.split("T")[0]) {
        throw new GraphQLError(
          "You've already logged an activity for today. Come back tomorrow."
        );
      }

      return context.prisma.createActivity({
        timestamp,
        user: {
          connect: { id: user }
        },
        habit: {
          connect: { id: habit }
        }
      });
    }
  },
  User: {
    habits(parent, args, context: Context) {
      return context.prisma.user({ id: parent.id }).habits();
    }
  },
  Habit: {
    user(parent, args, context: Context) {
      return context.prisma.habit({ id: parent.id }).user();
    },
    activity(parent, args, context: Context) {
      return context.prisma.habit({ id: parent.id }).activity({
        orderBy: "createdAt_DESC",
        first: 30
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs: `
    ${queryDefs}
    ${typeDefs}
  `,
  resolvers,
  context: {
    prisma
  }
});

const options = {
  endpoint: "/api/graphql",
  playground: "/api/graphql"
};

server.start(options, () => console.log(`Server is running`));

export default server.express;
