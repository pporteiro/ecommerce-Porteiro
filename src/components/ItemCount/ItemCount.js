import { ButtonGroup, Button } from "react-bootstrap";
import "./ItemCount.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log("cambio el count");
  }, [count]);

  const changeCounter = (condition) => {
    if (condition === "-") {
      setCount(count - 1);
    } else if (condition === "+") {
      setCount(count + 1);
    } else {
      console.log(`Something went wrong ${condition} is not recognised.`);
    }
  };

  return (
    <div className="">
      <ButtonGroup className="mb-2">
        <Button
          className="btn-left"
          onClick={() => {
            if (count > initial) {
              changeCounter("-");
            }
          }}
        >
          -
        </Button>

        <Button className="disabled">{count}</Button>

        <Button
          className="btn-right"
          onClick={() => {
            if (count < stock) changeCounter("+");
          }}
        >
          +
        </Button>
      </ButtonGroup>
      <br />

      <ButtonGroup>
        <Button
          onClick={() => {
            if (count <= stock) onAdd(count);
          }}
        >
          Add to cart
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ItemCount;
