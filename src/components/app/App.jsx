import './App.css'
import Nav from "../nav/Nav.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import HomePage from "../homePage/HomePage.jsx";
import Footer from "../footer/Footer.jsx";
import CatalogPage from "../catalogPage/CatalogPage.jsx";
import OrderPage from "../orderPage/OrderPage.jsx";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PromotionPage from "../promotionPage/PromotionPage.jsx";

function App() {
    return (
        <Router>
            <div className="app">
                <Nav />
                <main className="main-content">
                    <Sidebar />
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/catalog' element={<CatalogPage />} />
                        <Route path='/order' element={<OrderPage />} />
                        <Route path='/promotions' element={<PromotionPage/>}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
