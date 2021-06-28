import React, { useState } from "react";
import { useDataContext } from "../context/DataContext";
import { Button, Modal, ModalBody, ModalFooter, Row, Col } from "reactstrap";
import { Product } from "../models/Product";
import { ShoppingCartItem } from "../models/ShoppingCartItem";

const ModalProduct = ({ product }: { product: Product }) => {
  const { setShoppingCartItems } = useDataContext();
  const [amountToAdd, setAmountToAdd] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const toggle = () => setModal(!modal);

  const modifyAmount = (e: string) => {
    if (e === "-") {
      if (amountToAdd === 0) {
        return;
      }
      setAmountToAdd(amountToAdd - 1);
    } else {
      if (amountToAdd > 9) {
        return;
      }
      setAmountToAdd(amountToAdd + 1);
    }
  };

  const addToCar = () => {
    const productToSave: ShoppingCartItem = { ...product, amount: amountToAdd };
    setShoppingCartItems((shoppingCartItems) => [...shoppingCartItems, productToSave]);
    setAmountToAdd(0);
  };

  const onCancel = () => {
    setAmountToAdd(0);
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>
        See product
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="d-flex justify-content-between m-2 mx-3 align-items-center">
          <h4 className="text-capitalize m-0">{product.name}</h4>
          <Button onClick={toggle} color="danger">
            X
          </Button>
        </div>
        <hr className="m-0" />
        <ModalBody>
          <img src={product.img} className="rounded  card-img-top h-100" alt="..." style={{ objectFit: "cover" }} />
          <div className="text-center">
            <span>
              Select the amount: <b>{amountToAdd}</b>{" "}
            </span>
            <Button color="danger" active onClick={() => modifyAmount("-")} className="mx-2">
              -
            </Button>
            <Button color="primary" active onClick={() => modifyAmount("+")}>
              +
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Row>
            <Col>
              <Button color="secondary" active disabled={amountToAdd === 0} onClick={() => onCancel()} className="mx-2">
                Cancel
              </Button>
              <Button color="primary" active disabled={amountToAdd === 0} onClick={addToCar}>
                Add to cart
              </Button>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalProduct;
