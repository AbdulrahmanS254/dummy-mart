import logo from "/endaza-string.png";

export default function About() {
    return (
        <section className="about bg-orange-50 py-12 md:py-24" id="about">
            <div className="container mx-auto px-10 lg:px-25">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2 md:block flex justify-center space-y-6">
                        <img src={logo} className="w-90" alt="indaza" />
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                        <h2 className="md:text-2xl font-bold text-midnight leading-tight uppercase">
                            Where Art meets Geometry
                        </h2>
                        <p className="text-lg text-gray-600 md:max-w-lg">
                            Maybe you've seen threads, nails, knitted flowers, or geometric shapes.
                            But behind every tiny detail, there's a story made by a hand that thinks and creates with love.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
