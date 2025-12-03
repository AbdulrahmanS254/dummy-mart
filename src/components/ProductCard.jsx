import { Link } from "react-router-dom";
// import { useCart } from "../context/AuthContext";

export default function ProductCard({ product }) {
    const { id, title, description, price, thumbnail } = product;
    console.log(product);

    return (
        <div className="product-card bg-orange-50 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden border border-orange-100 group">
            <div className="relative bg-white h-56 p-4 flex items-center justify-center overflow-hidden">
                <Link
                    to={`/product/${id}`}
                    className="w-full h-full flex justify-center items-center"
                >
                    <img
                        src={thumbnail}
                        alt={title}
                        className="object-contain h-full w-full transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>
            </div>

            <div className="p-5 flex flex-col gap-3 grow">
                <div>
                    <Link to={`/product/${id}`}>
                        <h3
                            className="text-lg font-bold text-gray-900 hover:text-orange-500 transition-colors line-clamp-1"
                            title={title}
                        >
                            {title}
                        </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between border-t border-orange-200/50">
                    <span className="text-2xl font-bold text-midnight">
                        E£{price}
                    </span>

                    <button className="bg-orange-300 text-midnight px-4 py-2 rounded-lg text-sm font-semibold hover:bg-midnight hover:text-white transition-colors duration-300 shadow-sm cursor-pointer">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
