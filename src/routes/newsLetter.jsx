export default function NewsLetter() {
    return (
        <>
            <div className="container mx-auto p-4">
                <img className="mask mask-star-2 mx-auto" src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />
                <h3 className="text-center my-5 text-lg font-bold capitalize">To get Updates subscribe newsletter</h3>
                <div className="mx-auto flex items-center justify-center">
                    <input required type="email" placeholder="Your Valid Email" className="input input-bordered input-accent max-w-xs w-full" />
                </div>
                <button className="mx-auto flex my-4 p-4 px-8 bg-green-500 rounded-xl text-white font-bold text-xl">Subscribe</button>
            </div>
        </>
    )
}