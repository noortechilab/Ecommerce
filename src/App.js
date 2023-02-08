import React from "react";
import Header from "./components/Header";
import Products from "./components/pages/Products";
import CartScreen from "./components/pages/CartScreen";
import ProductScreen from "./components/pages/ProductScreen";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Products />} exact />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
      </Router>
    </>
  );
}

export default App;
