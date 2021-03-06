import "./ItemDetail.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const ItemDetail = ({
  id,
  title,
  price,
  category,
  description,
  pictureUrl,
  stock,
}) => {
  const { addItem, isInCart, getQuantity, removeItem, errors } =
    useContext(CartContext);

  const handleAdd = (count) => {
    const objProd = {
      id,
      title,
      price,
      pictureUrl,
      category,
      stock,
      quantity: count,
    };

    addItem(objProd, stock);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="center">
            <Card.Img
              src={pictureUrl}
              alt="Card image"
              className="detail-img"
            />
          </Col>
          <Col className="center-text">
            <Card className="cardDetail">
              <Row>
                <h1 className="card-title">{title}</h1>
              </Row>
              <br />
              <Row>
                <h2 className="card-title">${price}</h2>
              </Row>
              <br />

              <Row>
                <p className="card-title">{description}</p>
              </Row>
              <Row>
                {isInCart(id) ? (
                  <>
                    <ItemCount
                      onAdd={handleAdd}
                      stock={stock}
                      initial={getQuantity(id)}
                      inCart={true}
                    />
                  </>
                ) : (
                  <ItemCount
                    onAdd={handleAdd}
                    stock={stock}
                    initial={1}
                    inCart={false}
                  />
                )}
                {isInCart(id) ? (
                  <>
                    <div className="mt-2">
                      <Link to="/cart">See in cart</Link>
                    </div>

                    <div className="mt-2">
                      <p
                        className="btn btn-primary yaencarro"
                        onClick={() => {
                          removeItem(id);
                        }}
                      >
                        Remove from cart
                      </p>
                    </div>
                  </>
                ) : (
                  <div></div>
                )}

                {errors.length > 0 &&
                  errors.map((e, index) => <h4 key={index}>{e}</h4>)}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
