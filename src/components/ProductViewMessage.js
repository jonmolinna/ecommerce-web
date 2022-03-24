import React from 'react';
import { Link } from 'react-router-dom';

const ProductViewMessage = ({ t, message, router, link }) => {

    return (
        <div
            className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-neutral-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-white">
                        { message }
                    </p>
                    <Link
                        to={`/${link}`}
                        className="mt-1 text-sm text-pink-400"
                    >
                      { router }
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default ProductViewMessage;