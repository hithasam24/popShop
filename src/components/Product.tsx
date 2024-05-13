import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Data {
    name: string;
    image: string;
    price: number;
    desc: string;
    sizes: string[];
}

function Product({ name, image, price, desc, sizes }: Data) {
    const navigate = useNavigate();
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const handleNavigate = ( ) => {
        navigate("/home/product", { state: { name, image, price, desc, selectedSize  } });
    }
    const handleSizeSelection = (size: string) => {
        
        setSelectedSize(size);
    }
    return (
        <>
            <button onClick={handleNavigate}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img src={image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75 hover:duration-300" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${price}</p>
            </button>
            <div className="mt-2">
                <p>Size:</p>
                <div className="flex gap-2">
                    {sizes.map((size, index) => (
                        <button key={index} onClick={() => handleSizeSelection(size)} className={`bg-gray-200 hover:bg-gray-300 py-1 px-3 rounded-lg ${selectedSize === size ? 'bg-mygreen text-white' : ''}`}>
                            {size} {/* Use size as the text content of the button */}
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product
