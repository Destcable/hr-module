import buildGraphQLProvider from "ra-data-graphql-simple";

export const dataProvider = buildGraphQLProvider({
    clientOptions: { uri: 'http://localhost:4000' }
});