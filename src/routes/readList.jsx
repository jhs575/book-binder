import { useEffect, useState } from "react";

export default function ReadList() {
  const [readList, setReadList] = useState([])
  useEffect(() => {
    setReadList(JSON.parse(localStorage.getItem("readList") ?? "[]"))
  }, [])

  return (
    <>
      <section className="container mx-auto my-20">
        {readList.map((book) => {
          return (
            <div className="">
              <img className="w-32 h-44"
                src={book.image} />
              <div className="BookCard inline-flex space-x-6 items-start justify-start p-6 border rounded-2xl border-gray-900 border-opacity-10">
                <div className="Rectangle2 w-1/5 h-full bg-gray-900 bg-opacity-5 rounded-2xl">

                </div>
                <div className="Content inline-flex flex-col space-y-4 items-start justify-start">
                  <div className="Frame6 flex flex-col space-y-4 items-start justify-start">
                    <div className="Title& Author flex flex-col space-y-4 items-start justify-start">
                      <p className="TheCatcher in the Rye text-2xl font-bold text-gray-900">{book.bookName}</p>
                      <p className="text-base font-medium text-center text-gray-900 text-opacity-80">
                        By : {book.author}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 space-x-4 items-center justify-start">
                      <p className="text-base font-bold leading-relaxed text-gray-900 ">Tags:{book.tags.map((tag) => {
                        return (
                          <div className="px-4 py-1.5 bg-green-600 bg-opacity-5 rounded-full">
                            <p className="#YoungAdult text-base font-medium text-center text-green-600">{tag}
                            </p>
                          </div>

                        )
                      })}</p>
                      <div className="Ratting flex space-x-2 items-center justify-start">
                        <i className='bx bx-map' ></i>
                        <p className="text-base text-center text-gray-900 text-opacity-80">
                          Year of Publishing: {book.yearOfPublishing}</p>
                      </div>
                      <div className="Ratting flex items-center justify-start">
                        <i className='bx bx-user-circle' ></i>
                        <p className="text-base text-center text-gray-900 text-opacity-60 w-40">
                          Publisher: {book.publisher} </p>
                      </div>
                      <div className="Ratting flex space-x-2 items-center justify-start">
                        <i className='bx bxs-file-doc Frame w-6 h-full rounded-lg' ></i>
                        <p className="Page192 text-base text-center text-gray-900 text-opacity-60">Page {book.totalPages}</p>
                      </div>
                    </div>
                  </div>
                  <div className="Line1 border-gray-900 border-opacity-10"></div>
                  <div className="Ratting& Content inline-flex items-center justify-start">
                    <div className="Frame12 flex space-x-3 items-start justify-start">
                      <div
                        className="Frame4 flex items-center justify-center px-5 py-2.5 bg-blue-500 bg-opacity-10 rounded-full">
                        <p className="text-base text-center text-blue-500">Category: {book.category}
                        </p>
                      </div>
                      <div
                        className="Frame11 flex items-center justify-center px-5 py-2.5 bg-yellow-400 bg-opacity-10 rounded-full">
                        <p className="text-base text-center text-yellow-400">Rating: {book.rating}</p>
                      </div>
                      <div
                        className="Frame12 flex items-center justify-center px-5 py-2.5 bg-green-600 rounded-full">
                        <p className="text-lg font-medium text-center text-white">View Details</p>
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