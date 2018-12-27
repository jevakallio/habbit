import { prisma } from "./prisma-client";
import { GraphQLServer } from "graphql-yoga";

const resolvers = {
  Query: {
    users(parent, args, context) {
      return context.prisma.users();
    }
  },
  Mutation: {
    createUser(parent, args, context) {
      return context.prisma.createUser({ name: args.name, email: args.email });
    }
  }
};

const typeDefs = `
type Query {
  users: [User!]!
}

type Mutation {
  createUser(name: String!): User
}

type User {
  id: ID!
  name: String!
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
