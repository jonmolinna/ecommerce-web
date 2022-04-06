import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <p className="text-3xl font-bold">404 | Not Found</p>
      <Link
        to="/"
        className="text-lg text-white bg-pink-700 px-2 py-1 rounded-md mt-3"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

export default Error404;
