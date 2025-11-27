export default function Products() {
    const source =
        "https://static.wikia.nocookie.net/fortnite/images/c/c9/Dummy_-_Outfit_-_Fortnite.png/revision/latest?cb=20200721083946";
    return (
        <section className="products-section py-12 md:py-24">
            <div className="container mx-auto px-10 lg:px-25">
                <div className="grid grid-cols-4 gap-4">
                    <div className="product-card bg-orange-50 p-5 rounded shadow-sm flex flex-col ">
                        <div className="image-wrapper">
                            <img src={source} alt="" />
                        </div>
                        <div className="card-text">
                            <h3 className="title text-2xl">
                                Some title
                            </h3>
                            <p className="description text-sm">
                                some description some description some description some description some description some description
                            </p>
                        </div>
                        <div className="card-footer">
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
