import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
    mutation register (
        $nombre: String!,
        $apellido: String!,
        $email: String!,
        $password: String!,
        $confirmPassword: String!,
    ) {
        register(
            input: {
                nombre: $nombre,
                apellido: $apellido,
                email: $email,
                password: $password,
                confirmPassword: $confirmPassword,
            }
        ) {
            id
            nombre
            apellido
            email
            token
        }
    }
`;

export const UPDATED_USER = gql`
    mutation updatedUser(
        $id: ID!,
        $nombre: String!,
        $apellido: String!,
        $dni: String,
        $telefono: String,
        $fech_nacimiento: String,
        $genero: String,
    ){
        updatedUser(
            id: $id,
            input: {
                nombre: $nombre,
                apellido: $apellido,
                dni: $dni,
                telefono: $telefono,
                fech_nacimiento: $fech_nacimiento,
                genero: $genero,
            }
        ) {
            id
            nombre
            apellido
            dni
            telefono
            fech_nacimiento
            genero
        }
    }
`;