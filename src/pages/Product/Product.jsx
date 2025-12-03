import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                
                if (!response.ok) {
                    throw new Error("Product not found");
                }

                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // --- حالات التحميل والخطأ ---
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl font-bold text-midnight animate-pulse">
                    Loading Details...
                </p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <p className="text-red-500 text-lg font-medium">
                    Error: {error || "Product not found"}
                </p>
                <Link to="/products" className="text-midnight hover:text-orange-500 underline transition font-bold">
                    Back to Products
                </Link>
            </div>
        );
    }

    // --- عرض المنتج ---
    return (
        <div className="container mx-auto px-4 py-12">
            
            {/* زرار الرجوع */}
            <Link 
                to="/products" 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-midnight mb-8 transition-colors"
            >
                ← Back to Products
            </Link>

            <div className="bg-white rounded-2xl shadow-sm border border-orange-50 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    
                    {/* القسم الأيمن: الصورة */}
                    <div className="bg-orange-50 p-8 flex items-center justify-center min-h-[400px]">
                        <img 
                            src={product.images ? product.images[0] : product.thumbnail} 
                            alt={product.title} 
                            className="max-h-[400px] w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* القسم الأيسر: التفاصيل */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase mb-2">
                            {product.category}
                        </span>
                        
                        <h1 className="text-3xl md:text-4xl font-bold text-midnight mb-4 leading-tight">
                            {product.title}
                        </h1>

                        {/* التقييم (اختياري لو متاح في الـ API) */}
                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-midnight text-white text-xs px-2 py-1 rounded">
                                {product.rating} ★
                            </span>
                            <span className="text-sm text-gray-500">
                                ({product.stock} in stock)
                            </span>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        <div className="mt-auto border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <p className="text-sm text-gray-400 mb-1">Total Price</p>
                                <span className="text-4xl font-bold text-midnight">
                                    ${product.price}
                                </span>
                            </div>

                            <button 
                                className="w-full sm:w-auto bg-orange-300 text-midnight px-8 py-4 rounded-xl font-bold text-lg hover:bg-midnight hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                // onClick={() => addToCart(product)} // لاحقاً
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}