import { Link } from "react-router-dom";
import model from "/model-2.png";

export default function Hero() {
    return (
        <section className="hero-section bg-orange-50 py-12 md:py-24">
            
            <div className="container mx-auto px-10 lg:px-25">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                            Warmth & Style <br />
                            <span className="text-midnight">Handmade</span> for You
                        </h1>
                        
                        <p className="text-lg text-gray-600 md:max-w-lg">
                            Discover the finest crochet collection at Endaza. 
                            Each piece is crafted with love, using premium yarn 
                            to give you the perfect blend of comfort and elegance.
                        </p>

                        <div className="pt-4">
                            <Link 
                                to="/products" 
                                className="inline-block bg-black text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-800 transition-colors duration-300"
                            >
                                Shop Collection
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center relative">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 bg-orange-300 rounded-full flex items-center justify-center shadow-xl">
                            
                            <img 
                                src={model} 
                                className="w-full h-full object-cover rounded-full" 
                                alt="Endaza Model" 
                            />
                            
                            <div className="absolute -bottom-4 -right-4 bg-black text-white w-24 h-24 rounded-full flex items-center justify-center font-bold text-xl shadow-lg animate-bounce">
                                New!
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}