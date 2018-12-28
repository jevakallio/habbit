import { prisma, Prisma } from "./prisma-client";
import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./typeDefs";
import { findAddedNonNullDirectiveArgs } from "graphql/utilities/findBreakingChanges";

type Context = {
  prisma: Prisma;
};

const queryDefs = `
  type Query {
    user(id: ID!): User
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
  }
`;

const resolvers = {
  Query: {
    user(parent, args, context: Context) {
      return context.prisma.user({ id: args.id });
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
    }
  },
  User: {
    habits(parent, args, context: Context) {
      return context.prisma.user({ id: parent.id }).habits();
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
