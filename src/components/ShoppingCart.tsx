import { useState, useEffect } from "react";
import { useDataContext } from "../context/DataContext";

const ShoppingCart = () => {
  const { shoppingCartItems, setShoppingCartItems } = useDataContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      shoppingCartItems.reduce((total, { price, amount }) => {
        total += price * amount;
        return total;
      }, 0)
    );
  }, [shoppingCartItems]);

  const onDelete = (id: number) => {
    const data = shoppingCartItems.filter((item) => item.id !== id && item);
    setShoppingCartItems((shoppingCartItems) => data);
  };

  return (
    <>
      {shoppingCartItems.length > 0 ? (
        <table className="table w-75 m-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCartItems.map((product, index) => (
              <tr key={product.id} className="align-middle">
                <th scope="row">{index + 1}</th>
                <td className="text-capitalize">{product.name}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => onDelete(product.id)}>
                    X
                  </button>
                </td>
              </tr>
            ))}
            <tr className="align-baseline">
              <td></td>
              <td></td>
              <td>
                <b>TOTAL:</b>
              </td>
              <td>
                <b>{total.toFixed(2)}</b>
              </td>
              <td>
                <a className="btn btn-primary" href="/">
                  PAY
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h4 className="pt-4">Haven't selected any item</h4>
      )}
    </>
  );
};

export default ShoppingCart;
