import React from "react";
import { useQuery } from "@apollo/client";
import Product from "../components/Product";
import Container from "../layouts/Container";

import { GET_MAN_PRODUCTS } from "../graphql/query";

const Hombre = () => {
  const { data, loading } = useQuery(GET_MAN_PRODUCTS, {
    variables: {
      genero: "hombre",
    },
  });

  return (
    <Container>
      {loading ? (
        <p className="text-center text-2xl font-bold">Cargando ...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-9">
          {data?.getAllProducts &&
            data.getAllProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      )}
    </Container>
  );
};

export default Hombre;
