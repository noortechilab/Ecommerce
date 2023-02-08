import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";
import { useProductContext } from "../../context/productContext";
import "../../App.css";
import ProductScreen from "./ProductScreen";
const Products = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const res = await fetch("https://dummyjson.com/products");
  //     const data = await res.json();
  //     setProducts(data.products);
  //   };
  //   fetchProducts();
  // }, []);
  const { products } = useProductContext();
  useEffect(() => {
    console.log(products.filter((product) => product.id === 1));
  }, []);

  return (
    <>
      <h1 className="text-center pt-5 store-heading">
        Welcome to our Ecommerce Store ....
      </h1>
      <Row className="w-100 mt-5 ">
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={3} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
