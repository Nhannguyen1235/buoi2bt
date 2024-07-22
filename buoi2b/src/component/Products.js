import React, { useState } from "react";
import Product from "./Product";
import img1 from "../tour-3.png";
import img2 from "../tour-6.png";
import img3 from "../tour-9.png";
import img4 from "../tour-13.png";
import "./style.css";
import { Row, Container, Col } from "reactstrap";

export default function Products() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "Three Temples Bangkok City Tour Must Visit",
      price: 100,
      location: "New York",
      salePrice: "$1,000",
      image: img1,
    },
    {
      id: 2,
      name: "Essence of Vietnam South to North",
      price: "$1,200",
      location: "New York",
      salePrice: "$1,000",
      image: img2,
    },
    {
      id: 3,
      name: "Osa Peninsula to Dominical City Tour",
      price: 300,
      location: "New York",
      salePrice: "$1,000",
      image: img3,
    },
    {
      id: 4,
      name: "Mt Fuji, Hakone, Lake Ashi Cruise",
      price: 400,
      location: "New York",
      salePrice: "$1,000",
      image: img4,
    },
  ]);

  return (
    <Container>
      <ul className="border-0 justify-content-center nav nav-tabs" role="tablist">
        <li className="nav-item" ><button className="nav-link" type="button">New York</button></li>
        <li className="nav-item"><button className="nav-link" type="button">New York</button></li>
        <li className="nav-item"><button className="nav-link" type="button">New York</button></li>
        <li className="nav-item"><button className="nav-link" type="button">New York</button></li>
      </ul>
      <Row>
        {list.map((item, index) => (
          <Product key={index} pro={item} />
        ))}
      </Row>
    </Container>
  );
}
