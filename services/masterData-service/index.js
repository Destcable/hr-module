import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { Query, Mutation} from './src/models/index.js';
import { readAndConcatenateSchemas } from './src/utils/readAndConcatenateSchemas.js';
import { schemaFilePaths } from './src/core/config/schemaFilePaths.config.js';

const resolvers = { 
    Query,
    Mutation
};

const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: readAndConcatenateSchemas(schemaFilePaths),
    resolvers,
    context: { 
        prisma,
    }
})

server
    .listen()
    .then(({ url }) => console.log(`❄️  Server ready at: ${url}`))