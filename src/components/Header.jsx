import { NavLink } from "react-router-dom";
import NewsLetter from "../routes/newsLetter";
export default function Header() {
    return (
        <header className="px-4 lg:p-0 w-full z-20 fixed shadow-xl bg-white">
            <section className="container mx-auto">
                <div className="navbar bg-base-100 !px-0">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden !pl-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabindex="0"
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to={`/projects/assignment8/`} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-2 border-green-500 text-green-500"
                                        : ""
                                }>Home</NavLink></li>
                                <li><NavLink to={`/projects/assignment8/wish-list`} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-2 border-green-500 text-green-500"
                                        : ""
                                }>Listed Books</NavLink></li>
                                <li><NavLink to={`/projects/assignment8/chart`} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-2 border-green-500 text-green-500"
                                        : ""
                                }>Pages to Read</NavLink></li>
                                <li><NavLink to={`/projects/assignment8/newsletter`} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-2 border-green-500 text-green-500"
                                        : ""
                                }>Newsletter</NavLink></li>
                                <li><NavLink to={`/projects/assignment8/feedback`} className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-2 border-green-500 text-green-500"
                                        : ""
                                }>Feedback</NavLink></li>
                            </ul>
                        </div>
                        <p className="text-xl font-bold">Book Vibe</p>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to={`/projects/assignment8/`} className={({ isActive, isPending }) =>
                                isActive
                                    ? "border-2 border-green-500 text-green-500"
                                    : ""
                            }>Home</NavLink></li>
                            <li><NavLink to={`/projects/assignment8/wish-list`} className={({ isActive, isPending }) =>
                                isActive
                                    ? "border-2 border-green-500 text-green-500"
                                    : ""
                            }>Listed Books</NavLink></li>
                            <li><NavLink to={`/projects/assignment8/chart`} className={({ isActive, isPending }) =>
                                isActive
                                    ? "border-2 border-green-500 text-green-500"
                                    : ""
                            }>Pages to Read</NavLink></li>
                            <li><NavLink to={`/projects/assignment8/newsletter`} className={({ isActive, isPending }) =>
                                isActive
                                    ? "border-2 border-green-500 text-green-500"
                                    : ""
                            }>Newsletter</NavLink></li>
                            <li><NavLink to={`/projects/assignment8/feedback`} className={({ isActive, isPending }) =>
                                isActive
                                    ? "border-2 border-green-500 text-green-500"
                                    : ""
                            }>Feedback</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                    </div>
                </div>
            </section>
        </header>
    )
}