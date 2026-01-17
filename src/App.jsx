import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Auth from './pages/Auth';
import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/product-list');
        }
    }, [navigate]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/product-details/:id" element={<ProductDetails />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;