import React from "react";
import Container from "../layouts/Container";
import { useQuery } from "@apollo/client";
import Product from "../components/Product";

import { GET_WOMAN_PRODUCTS } from "../graphql/query";

const Mujer = () => {
  const { data, loading } = useQuery(GET_WOMAN_PRODUCTS, {
    variables: {
      genero: "mujer",
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

export default Mujer;
