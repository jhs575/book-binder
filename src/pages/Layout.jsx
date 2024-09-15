import Header from "../components/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout({ children }) {
    return (
        <>
            <ToastContainer />
            <Header />
            <div className="pt-28 lg:pt-20"></div>
            {children}
        </>
    )
}