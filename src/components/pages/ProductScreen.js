import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { Card, Row, Col } from "react-bootstrap";

const ProductScreen = () => {
  const { id } = useParams();

  const { products } = useProductContext();
  const [singleProduct, setSingleProduct] = useState({});
  // useEffect(() => {
  //   const URL = `https://dummyjson.com/products/${id}`;
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setSingleProduct(res);
  //       console.log("res=>", res.images[0]);
  //     });
  // }, []);

  useEffect(() => {
    console.log(products.filter((product) => product.id === id));

    const newProduct = products.filter((product) => product.id === id);
    console.log(newProduct);
  }, []);

  return (
    <>
      <Link className="btn btn-dark my-3 rounded-0  " to="/">
        GO BACK
      </Link>

      <h1 className="text-center">ProductScreen</h1>

      {/* <div>{singleProduct.title}</div>
      <img src={singleProduct?.images} alt="" /> */}
    </>
  );
};

export default ProductScreen;
