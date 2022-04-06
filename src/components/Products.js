import React from "react";
import Product from "./Product";
import { useQuery } from "@apollo/client";

import { GET_ALL_PRODUCTS } from "../graphql/query";
import Sidebar from "./Sidebar";

const Products = () => {
  const { data, loading } = useQuery(GET_ALL_PRODUCTS);

  return (
    <div>
      {loading ? (
        <p className="text-center text-2xl font-bold">Cargando ...</p>
      ) : (
        <div className="grid grid-cols-12 gap-6">
          <aside className="hidden md:flex md:col-span-4">
            <Sidebar />
          </aside>
          <aside className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-9">
              {data?.getAllProducts &&
                data.getAllProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Products;
