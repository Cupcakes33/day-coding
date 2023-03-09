import { useState } from "react";
import { DUMMY_ITEM_LIST as products } from "./data/DUMMY_ITEM_LIST";
import "./App.css";

function App() {
  const [basket, setBasket] = useState([]);

  const onClickHandler = (itemId) => {
    const itemIndex = basket.findIndex(
      (basketItem) => basketItem.id === itemId
    );
    if (itemIndex === -1) {
      setBasket([...basket, { id: itemId, count: 1 }]);
    } else {
      const copyBasket = [...basket];
      copyBasket[itemIndex].count += 1;
      setBasket(copyBasket);
    }
  };

  const calculateProductPrice = (product, count) => {
    return product.price * count;
  };

  const findProductById = (basketItem) => {
    return products.find((p) => p.id === basketItem.id);
  };

  const calculateTotalPrice = () => {
    let result = 0;
    basket.forEach((basketItem) => {
      const product = findProductById(basketItem);
      result += calculateProductPrice(product, basketItem.count);
    });
    return result;
  };

  return (
    <>
      {products.map((product) => {
        return (
          <button
            key={`item${product.id}`}
            onClick={() => onClickHandler(product.id)}
          >
            {product.name}
          </button>
        );
      })}
      <div>
        <h1>가격표</h1>
        {basket.length !== 0 ? (
          <ul className="item-list">
            {basket.map((basketItem) => {
              const product = findProductById(basketItem);
              const price = calculateProductPrice(product, basketItem.count);
              return (
                <li key={`basket${basketItem.id}`}>
                  <span>{product.name}</span>
                  <span>{basketItem.count}</span>
                  <span>{price}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <div>아직 상품을 고르지 않았어요</div>
        )}

        <span>합계 : {calculateTotalPrice()}</span>
      </div>
    </>
  );
}

export default App;
