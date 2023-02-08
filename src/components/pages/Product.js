import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
const Product = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product.id}`}>
          <Card.Img src={product.images[0]} varinat="top" />
        </Link>

        <Card.Body>
          <Link
            to={`/product/${product.id}`}
            className="text-decoration-none text-dark fs-5"
          >
            <Card.Title as="div">
              <strong>{product.title}</strong>
            </Card.Title>
          </Link>
          <Card.Text>${product.description}</Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
