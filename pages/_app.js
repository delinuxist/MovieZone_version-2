import "../styles/globals.css";
import Navbar from "../components/layouts/Navbar";
import { AuthContextProvider } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ToastContainer position="top-center" />
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
