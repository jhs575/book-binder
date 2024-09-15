import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from './error-page';
import WishList from "./routes/wishList"; 
import ReadList from './routes/readList';
import Layout from './pages/Layout';
import Book , {loader as bookLoader} from './routes/book';
import NewsLetter from './routes/newsLetter';
import FeedBack from './routes/feedback';
import Chart from './routes/chart';


const router = createBrowserRouter([
  {
    path: "/projects/assignment8/",
    element: <Layout><Root/></Layout>,
    errorElement: <Layout><ErrorPage/></Layout>,
  },
  {
    path: "/projects/assignment8/wish-list",
    element: <Layout><WishList/></Layout>,
  },
  {
    path: "/projects/assignment8/read-list",
    element: <Layout><ReadList/></Layout>,
  },
  {
    path: "/projects/assignment8/book/:bookID",
    element: <Layout><Book/></Layout>,
    loader: bookLoader,
  },
  {
    path: "/projects/assignment8/chart",
    element: <Layout><Chart/></Layout>,
    loader: bookLoader,
  },
  {
    path: "/projects/assignment8/newsletter",
    element: <Layout><NewsLetter/></Layout>,
    loader: bookLoader,
  },
  {
    path: "/projects/assignment8/feedback",
    element: <Layout><FeedBack/></Layout>,
    loader: bookLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
