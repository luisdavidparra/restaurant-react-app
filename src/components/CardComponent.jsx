import React, { Fragment } from "react";
import ModalProduct from "./ModalProduct";
import { Card, CardImg, CardText, Col, CardFooter, CardBody, CardHeader } from "reactstrap";

const CardComponent = ({ product }) => {
  return (
    <>
      <Col xl="3" lg="4" md="6">
        <Card className="mt-3">
          <CardHeader tag="h5" className="text-capitalize">
            {product.name}
          </CardHeader>
          <CardImg
            top
            src={product.img}
            alt={product.name}
            className="m-auto"
            title={product.name}
            style={{ width: "200px", height: "200px", objectFit: "contain" }}
          />
          <CardBody>
            <CardText className="text-start">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
          <CardFooter>
            <ModalProduct product={product} />
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default CardComponent;
