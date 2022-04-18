import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    // uri: 'https://social-monarch-98.hasura.app/v1/graphql',
    uri: 'https://mutual-donkey-42.hasura.app/v1/graphql',
    // uri: process.env.REACT_APP_SERVER_GRAPHQL,
    headers: {
        'x-hasura-admin-secret':
            // 'BIVee1gzUno7AUb18M7a6tleepltnWWkwsh5iYoE0UMoy5jZt5Jb9pvMIlhTngzd',
            'hQrq3anmdasvBP95CLaOYTXUtdfrZTGJYtEcm0Rihn4MP6KgK3oUX9JWjH3LLsKc',
            // process.env.REACT_APP_SERVER_GRAPHQL
    },
    cache: new InMemoryCache(),
});

export default client;