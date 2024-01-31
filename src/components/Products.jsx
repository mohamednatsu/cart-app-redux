import React, { useEffect } from "react";
import CardApp from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../rtk/slices/product-slice";
import { Container, Col, Row } from "react-bootstrap";

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    // Get products data here.
    dispatch(fetchProduct());
  }, []);
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <Row>
        <Col >
            {products.map((product) => {
              return <CardApp key={product.id} src={product.image} />;
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
