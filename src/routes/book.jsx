import { Form, useLoaderData } from "react-router-dom";
import bookList from "../BookList";
import { toast } from 'react-toastify';

export function loader({ params }) {
    const bookID = params.bookID;
    const book = bookList.find((book) => book.bookID == bookID)
    return { book };
}

export default function Book() {

    const { book } = useLoaderData()

    function handleRead() {
        const readList = JSON.parse(localStorage.getItem("readList") ?? "[]");
        console.log('Read Clicked')
        // const readList = []
        if (readList.find((rBook) => rBook.bookID == book.bookID)) {
            toast.error("You Have Already Read These Book")
            return
        }
        readList.push(book)
        localStorage.setItem("readList", JSON.stringify(readList));
        toast("Book Added To Read List")

    }
    function handleWishList() {
        const wishList = JSON.parse(localStorage.getItem("wishList") ?? "[]");
        if (wishList.find((wBook) => wBook.bookID == book.bookID)) {
            toast.error("You ave Already Added These Book To Wish List");
            return
        }
        const readList = JSON.parse(localStorage.getItem("readList") ?? "[]");
        console.log('Read Clicked')
        // const readList = []
        if (readList.find((rBook) => rBook.bookID == book.bookID)) {
            toast.error("You Have Already Read These Book")
            return
        }

        wishList.push(book)
        localStorage.setItem("wishList", JSON.stringify(wishList));
        toast("Book Added To Wish List")

    }
    return (
        <>
            <section className="container mx-auto lg:my-24">
                <div className="flex flex-col lg:flex-row gap-10 p-5">
                    <div className="inline-flex items-center justify-center px-20 py-20  left-0 top-0 bg-gray-900 bg-opacity-5 rounded-2xl">
                        <img src={'../' + book.image} alt="book" className="w-[425px]" />
                    </div>
                    <div className="h-full">
                        <div className="inline-flex flex-col space-y-5 items-start justify-end  top-0 left-[621px] lg:w-[444px] h-[93px]">
                            <p className="text-2xl lg:text-4xl font-bold text-gray-900">{book.bookName}</p>
                            <p className="text-xl font-medium text-gray-900 text-opacity-80">By : {book.author}</p>
                        </div>
                        <hr className="my-5" />
                        <p className=" text-xl font-medium text-gray-900 text-opacity-80">{book.category}</p>
                        <hr className="my-5" />
                        <p className=" text-base font-semibold">Review : <span className="!font-normal">{book.review}</span></p>
                        <div className="inline-flex space-x-4 items-center justify-end w-72 h-8 mt-8">
                            <p className="text-base font-bold leading-relaxed text-gray-900">Tag</p>
                            <div className="inline-flex space-x-3 items-start justify-start">
                                {book.tags.map((tag) => {
                                    return (
                                        <div
                                            className="flex items-center justify-center px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-full">
                                            <p className="text-base font-medium text-center text-green-600">#{tag}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <hr className="my-5" />
                        <div className="flex flex-row">
                                <p className="text-gray-900 text-opacity-70 w-40">Number of Pages</p>
                                <p className="font-semibold text-gray-900 w-40">: {book.totalPages}</p>
                        </div>
                        <div className="flex flex-row">
                                <p className="text-gray-900 text-opacity-70 w-40">Publisher</p>
                                <p className="font-semibold text-gray-900 w-40">: {book.publisher}</p>
                        </div>
                        <div className="flex flex-row">
                                <p className="text-gray-900 text-opacity-70 w-40">Year of Publishing</p>
                                <p className="font-semibold text-gray-900 w-40">: {book.yearOfPublishing}</p>
                        </div>
                        <div className="flex flex-row">
                                <p className="text-gray-900 text-opacity-70 w-40">Rating</p>
                                <p className="font-semibold text-gray-900 w-40">: {book.rating}</p>
                        </div>
                        <div className="flex space-x-4 items-center mt-20">
                            <div onClick={() => handleRead()}
                                className="flex items-center hover:bg-green-400 justify-center px-7 py-4 border rounded-lg border-gray-900 border-opacity-30">
                                <p className="text-lg font-semibold text-center text-gray-900 " >Read</p>
                            </div>
                            <div onClick={() => handleWishList()}
                                className="flex items-center justify-center px-7 py-4 hover:bg-green-500 bg-blue-400 rounded-lg">
                                <p className="text-lg font-semibold text-center text-white">Wishlist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}