import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function WishList() {
    const [wishList, setWishList] = useState([])
    const [readListButtonClass, setReadListButtonClass] = useState("px-3 border-2 border-b-white -mb-[2px] rounded-t-lg font-semibold")
    const [short, setShort] = useState("Sort By")
    const [wishListButtonClass, setWishListButtonClass] = useState("px-3 rounded-t-lg")
    useEffect(() => {
        setWishList(JSON.parse(localStorage.getItem("readList") ?? "[]"))
    }, [])


    function handleReadBooks() {
        setReadListButtonClass("px-3 border-2 border-b-white -mb-[2px] rounded-t-lg font-semibold")
        setWishListButtonClass("px-3 rounded-t-lg -mb-[2px]")
        setWishList(JSON.parse(localStorage.getItem("readList") ?? "[]"))
        return
    }
    function handleWishListBooks() {
        setReadListButtonClass("px-3 rounded-t-lg -mb-[2px]")
        setWishListButtonClass("px-3 border-2 border-b-white -mb-[2px] rounded-t-lg font-semibold")
        setWishList(JSON.parse(localStorage.getItem("wishList") ?? "[]"))
        return
    }
    function shortBtn(shortButton) {
        setShort(shortButton)
        if (shortButton == "Rating") {
            setWishList(wishList.sort((a, b) => a.rating < b.rating ? 1 : -1))
        }
        if (shortButton == "Number of Pages") {
            setWishList(wishList.sort((a, b) => a.totalPages < b.totalPages ? 1 : -1))
        }
        if (shortButton == "Publisher Year") {
            setWishList(wishList.sort((a, b) => a.yearOfPublishing < b.yearOfPublishing ? 1 : -1))
        }
        return
    }
    return (
        <>
            <div className="container mx-auto flex justify-center">
                <details className="dropdown">
                    <summary className="bg-green-500 btn w-48 hover:bg-green-400 text-white">{short}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48">
                        <li onClick={() => shortBtn("Rating")}><a>Rating</a></li>
                        <li onClick={() => shortBtn("Number of Pages")}><a>Number of Pages</a></li>
                        <li onClick={() => shortBtn("Publisher Year")}><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>
            <div className="container mt-5 mx-auto px-4 border-b-2 flex gap-2">
                <button onClick={() => handleReadBooks()} className={readListButtonClass}>Read Books</button>
                <button onClick={() => handleWishListBooks()} className={wishListButtonClass}>Wishlist Books</button>
            </div>
            <section className="container mx-auto my-20 flex flex-col gap-5">
                {wishList.map((book) => {
                    return (
                        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 p-6 mx-4 border rounded-2xl border-gray-900 border-opacity-10">
                            <div className="bg-[#F3F3F3] rounded-xl p-5">
                                <img className="w-40 mx-auto"
                                    src={book.image} />
                            </div>
                            <div className="flex flex-col w-full">
                                <div className=" inline-flex gap-4 flex-col items-start justify-start">
                                    <div className="flex flex-col gap-4 items-start justify-start">
                                        <div className="flex flex-col gap-4 items-start justify-start">
                                            <p className="text-2xl font-bold text-gray-900">{book.bookName}</p>
                                            <p className="font-medium text-gray-900 text-opacity-80">By : {book.author} {book.tags[0]}</p>
                                        </div>
                                        <div className="flex flex-col gap-4 lg:gap-10 lg:flex-row">
                                            {/* <p className="text-base font-bold leading-relaxed text-gray-900 ">Tags:{book.tags.map((tag) => {
                                                return (
                                                    <span className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-full">
                                                        <p className="font-medium text-center text-green-600">{tag}
                                                        </p>
                                                    </span>
                                                )
                                            })}</p> */}
                                            <p className="text-base font-bold leading-relaxed text-gray-900 ">Tags: <span className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-full font-medium text-center text-green-600">#{book.tags[0]}</span> <span className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-full font-medium text-center text-green-600">#{book.tags[1]}</span></p>
                                            <div className="Ratting flex space-x-2 items-center justify-start">
                                                <i className='bx bx-map' ></i>
                                                <p className="text-base text-center text-gray-900 text-opacity-80">
                                                    Year of Publishing: {book.yearOfPublishing}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4 lg:gap-10 lg:flex-row">
                                            <div className="Ratting flex items-center justify-start">
                                                <i className='bx bx-user-circle' ></i>
                                                <p className="text-base text-center text-gray-900 text-opacity-60 w-40">
                                                    Publisher: {book.publisher} </p>
                                            </div>
                                            <div className="Ratting flex space-x-2 items-center justify-start">
                                                <i className='bx bxs-file-doc w-6 h-full rounded-lg' ></i>
                                                <p className="Page192 text-base text-center text-gray-900 text-opacity-60">Page {book.totalPages}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="border border-[#13131326] w-full"></span>
                                    {/* <hr className="border-b-2" /> */}
                                    <div className=" inline-flex lg:items-center lg:justify-start">
                                        <div className=" flex lg:flex-row flex-col space-y-5 lg:space-y-0 lg:space-x-3 lg:items-start lg:justify-start ">
                                            <div
                                                className="flex items-center justify-center px-5 py-2.5 bg-blue-500 bg-opacity-10 rounded-full">
                                                <p className="text-base text-center text-[#328EFF]">Category: {book.category}
                                                </p>
                                            </div>
                                            <div
                                                className="flex items-center justify-center px-5 py-2.5 bg-yellow-400 bg-opacity-10 rounded-full">
                                                <p className="text-base text-center text-[#c4872d]">Rating: {book.rating}</p>
                                            </div>
                                            <div
                                                className="flex items-center justify-center px-5 py-2 bg-green-600 rounded-full">
                                                <Link to={`/projects/assignment8/book/${book.bookID}`} className="text-lg font-medium text-center text-white">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}