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

export const GET_ONE_PRODUCT = gql`
    query getProductById (
        $productId: ID!
    ){
        getProductById(
            productId: $productId
        ){
            id
            codigo
            marca
            descr
            precio
            material
            color
            urlImage
            genero
            detalles {
                id
                detalle
            }
            category {
                id
                category
                createdAt
            }
            medida {
                stock
            }
            createdAt
        }
    }
`;

export const GET_ALL_PRODUCTS = gql`
    query {
        getAllProducts {
            id
            codigo
            marca
            precio
            urlImage
            createdAt
        }
    }
`;

export const GET_MAN_PRODUCTS = gql`
    query getAllProducts(
        $genero: String
    ){
        getAllProducts(
            filter: {
                genero: $genero
            }
        ){
            id
            codigo
            marca
            precio
            urlImage
            createdAt
        }
    }
`;

export const GET_WOMAN_PRODUCTS = gql`
    query getAllProducts(
        $genero: String
    ){
        getAllProducts(
            filter: {
                genero: $genero
            }
        ){
            id
            codigo
            marca
            precio
            urlImage
            createdAt
        }
    }
`;