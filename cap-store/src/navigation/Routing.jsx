import { BrowserRouter , Route, Routes, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import About from "../pages/About"
import NotFound from "../pages/NotFound"
import ProductCard from "../pages/ProductCard"
import Contact from "../pages/Contact"
import ProductDetail from "../pages/ProductDetail"

function AppLayout() {
    const location = useLocation();

    const isNotFound = !["/", "/about", "/contact", "/productcard"].includes(location.pathname) && !location.pathname.startsWith("/productcard/");

    return (
        <>

            {!isNotFound && <Navbar />}

            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/productcard" element={<ProductCard />} />
                <Route path="/productcard/:id" element={<ProductDetail />} />
            </Routes>

            {!isNotFound && <Footer />}
        </>
    );
}

function Routing() {
    return (

        <BrowserRouter>
            <AppLayout />
        </BrowserRouter>
    )
}

export default Routing;