import { prisma, Prisma } from "./prisma-client";
import { GraphQLServer } from "graphql-yoga";

type Context = {
  prisma: Prisma;
};

const resolvers = {
  Query: {
    user(parent, args, context: Context) {
      return context.prisma.user({ id: args.id });
    }
  },
  Mutation: {
    createUser(parent, args, context: Context) {
      return context.prisma.createUser({ name: args.name, email: args.email });
    }
  },
  User: {
    habits(parent, args, context: Context) {
      return context.prisma.user({ id: parent.id }).habits();
    }
  }
};

const typeDefs = `
type Query {
  user(id: ID!): User
}

type Mutation {
  createUser(name: String!): User
}

type User {
  id: ID!
  name: String!
  email: String
  timezone: String
  habits: [Habit!]!
}

type Habit {
  id: ID!
  task: String!
  active: Boolean!
  avatarName: String!
  avatarColor: String!
}
`;
const server = new GraphQLServer({
  typeDefs, //: "./schema.graphql",
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
