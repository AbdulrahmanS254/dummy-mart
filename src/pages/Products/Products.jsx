import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

export default function Products() {
    // 1. States for Data
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. States for Pagination
    const [page, setPage] = useState(1);
    const limit = 12;
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const skip = (page - 1) * limit;
        console.log(skip);
        const fetchProducts = async () => {
            try {
                const response = await fetch(
                    `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
                );
                if (!response.ok) {
                    throw new Error("Error has occured");
                }

                const data = await response.json();
                setProducts(data.products);
                setTotalPages(Math.ceil(data.total / limit));
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [page]);

    const handleNext = () => {
        setPage((prev) => prev + 1);
        scrollToTop();
    };

    const handlePrev = () => {
        setPage((prev) => (prev !== 1 ? prev - 1 : 1));
        scrollToTop();
    };
    // ---------------------------------------------------------

    // --- UI Rendering ---
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-midnight animate-pulse">
                    Loading Collections...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 text-lg font-medium">
                    Error: {error}
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-midnight mb-4">
                    Our Collection
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our handmade crochet masterpieces. Crafted with
                    passion, designed for you.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center items-center gap-6 mt-16">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="px-6 py-2 bg-gray-100 text-midnight font-semibold rounded-lg hover:bg-orange-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                >
                    Previous
                </button>

                <span className="text-midnight font-bold text-lg">
                    Page {page} of {totalPages}
                </span>

                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="px-6 py-2 bg-gray-100 text-midnight font-semibold rounded-lg hover:bg-orange-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                >
                    Next
                </button>
            </div>
        </div>
    );
}
