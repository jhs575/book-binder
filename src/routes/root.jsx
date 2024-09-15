import { NavLink, Link } from "react-router-dom";
import bookList from "../BookList";

export default function Root() {
  return (
    <>
      {/* <div className="pt-8"></div> */}
      <section className="container mx-auto p-4">
        <div className="bg-[#F3F3F3] p-4 lg:px-32 rounded-xl">
          <div className="flex lg:justify-around">
            <div className="flex flex-col lg:p-24">
              <p className="my-5 font-bold text-2xl w-56 lg:w-96 lg:text-4xl">Books to freshen up your bookshelf
              </p>
              <NavLink to={`/projects/assignment8/wish-list`} className="px-2 py-4 bg-[#23BE0A] rounded-lg w-32 text-center text-white">View The
                List</NavLink>
            </div>
            <div>
              <img src="src/assets/dating-book.png" alt="dating-book" className="w-36 lg:w-96" />
            </div>
          </div>
        </div>
      </section>
      {/* Card Details */}
      <section className="mb-10 container mx-auto">
        <div>
          <p className="text-2xl font-bold my-8 text-center">Books</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-6">
          {bookList.map((book) => {
            return (
              <NavLink to={`/projects/assignment8/book/${book.bookID}`}>
                <div className="card border-2 h-full">
                  <figure className="mx-10 my-10 w-72 lg:w-80 bg-[#F3F3F3] rounded-xl">
                    <img src={book.image} alt="books" className="rounded-xl py-8 h-44" />
                  </figure>
                  <div className="px-10 pb-10">
                    <div className="flex gap-4 mb-4">
                      {book.tags.map((tags)=>{
                        return(
                          <p className="bg-[#F4FCF3] rounded-2xl py-2 px-4 font-medium text-[#23BE0A]">{tags}</p>
                        )
                      })}
                    </div>
                    <h2 className="card-title break-word max-w-80">{book.bookName}</h2>
                    <p className="mb-5 text-[#424242]">By: {book.author}</p>
                    <hr className="border-dashed mb-5" />
                    <div className="flex justify-between">
                      <p className="text-[#424242]">{book.category}</p>
                      <p className="text-[#424242]">{book.rating} <i className='bx bx-star'></i></p>
                    </div>
                  </div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </section>
    </>
  );
}