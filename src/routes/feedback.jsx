export default function FeedBack(){
    return(
        <>
        <div className="container mx-auto p-4">
            <h3 className="text-center text-lg my-5 font-bold capitalize">to any query please feel free to tell us</h3>
            <div className="mx-auto flex flex-col gap-5 items-center justify-center w-80">
                <input type="email" placeholder="Enter Your Email" className="input input-bordered input-accent max-w-xs w-full" />
                <input type="text" placeholder="Enter Your Name" className="input input-bordered input-accent max-w-xs w-full" />
                <textarea placeholder="Enter Your Feedback" className="border rounded-xl p-4 max-w-xs w-full input-accent -[#00D5BE]" name="" id="" rows="5"></textarea>
            </div>
            <button className="mx-auto flex my-4 p-4 px-8 bg-green-500 rounded-xl text-white font-bold text-xl">Submit</button>
        </div>
    </>
    )
}