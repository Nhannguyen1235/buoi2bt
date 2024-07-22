import React from "react";
import { Col } from "reactstrap";
import "./style.css";

export default function Product({ pro }) {
  return (
    <Col lg={3} md={4} sm={6} className="mb-4">
      <img src={pro.image} alt={pro.name} className="img-fluid" />
          <p>{pro.location}</p>
          <h3 className="fs-5 pb-3">{pro.name}</h3>
          <p className="mb-2">from: <span className="text-success fs-4">{pro.price}</span> <span className="texr-muted" ><s>{pro.salePrice}</s></span></p>
    </Col>
  );
}
