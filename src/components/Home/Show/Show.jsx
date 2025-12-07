import { Link } from "react-router-dom";
import model from "/model-1.png";

export default function Show() {
    return (
        <section className="relative bg-orange-50 min-h-[90vh] flex flex-col md:flex-row items-center justify-between overflow-hidden pt-10 md:pt-0">
            <div className="w-full md:w-1/2 px-6 md:pl-24 z-10 flex flex-col items-center text-center md:items-start md:text-left mb-10 md:mb-0">
                <span className="text-orange-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 animate-fade-in">
                    New Collection 2025
                </span>

                <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-950 leading-tight">
                    Handmade <br />
                    <span className="text-orange-400">Elegance</span> for You.
                </h2>

            </div>

            <div className="w-full md:w-1/2 h-[50vh] md:h-[90vh] flex items-end justify-center relative pb-0 md:pb-10">
                <div className="bg-white w-[80%] md:w-[70%] h-[80%] md:h-[85%] flex items-end justify-center px-4 md:px-7 rounded-t-full md:rounded-3xl shadow-sm relative">
                    <img
                        src={model}
                        alt="Fashion Model"
                        className="max-h-[110%] w-auto object-contain object-bottom drop-shadow-2xl hover:scale-105 origin-bottom transition-transform duration-700 md:mb-0"
                    />
                </div>
            </div>
        </section>
    );
}
