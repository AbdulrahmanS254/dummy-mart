import model from '/model-1.png'

export default function Show() {
    return (
        <section className="h-90 bg-orange-50 flex items-end justify-center">
            <img src={model} className='object-cover h-full' alt="model" />
        </section>
    )
}