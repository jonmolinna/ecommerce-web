import { gql } from "@apollo/client";

export const GET_ONE_USER = gql`
    query getUser(
        $userId: ID!
    ){
        getUser(
            userId: $userId
        ){
            id
            nombre
            apellido
            dni
            telefono
            fech_nacimiento
            genero
            email
        }
    }
`;