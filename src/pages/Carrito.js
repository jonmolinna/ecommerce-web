import React, { useContext } from "react";
import ProductCar from "../components/ProductCar";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import { CartContext } from "../context/shoppingCar";
import { formatMoney } from "../util/fomartMoney";

const Carrito = () => {
  const { cart } = useContext(CartContext);

  const quantityProduct = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const priceTotalProduct = cart.reduce(
    (total, product) => total + product.quantity * product.precio,
    0
  );

  const handleClick = () => {
    toast.success("Aún no contamos con esta opción");
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Carrito</h1>
      {cart.length > 0 ? (
        <article className="grid grid-cols-12 gap-x-4 gap-y-5">
          <aside className="col-span-12 md:col-span-7">
            {cart.map((product, index) => (
              <ProductCar key={index} product={product} />
            ))}
          </aside>
          <aside className="col-span-12 md:col-span-5">
            <div className="shadow-md p-3">
              <h2 className="text-xl font-bold mb-2">Resumen</h2>
              <article>
                <div className="flex justify-between">
                  <p className="font-normal">
                    Subtotal ({quantityProduct} productos)
                  </p>
                  <p className="font-normal">
                    S/ {formatMoney(priceTotalProduct)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-normal">Descuento</p>
                  <p className="font-normal">S/ 0</p>
                </div>
                <div className="flex justify-between my-3">
                  <p className="font-bold text-lg">Total</p>
                  <p className="font-bold text-lg">
                    S/ {formatMoney(priceTotalProduct)}
                  </p>
                </div>
              </article>
              <button
                onClick={handleClick}
                className="p-2 bg-pink-700 active:bg-pink-900 text-white rounded-md w-full"
              >
                Continuar
              </button>
            </div>
          </aside>
        </article>
      ) : (
        <article className="h-screen text-center pt-10">
          <h3 className="text-2xl mb-3">Tu carrito está vacío</h3>
          <Link to="/" className="bg-pink-700 text-white px-3 py-2 rounded-md">
            IR A COMPRAR
          </Link>
        </article>
      )}
      <Toaster
        toastOptions={{
          duration: 1000,
        }}
      />
    </Layout>
  );
};

export default Carrito;
