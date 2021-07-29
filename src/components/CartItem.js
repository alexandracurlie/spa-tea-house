import { Button } from "./index"

export const CartItem = ({ props, count, onClickPlus, onClickMinus, onClickTrash}) => {

  const increase = () => {
    onClickPlus(props);
  };

  const decrease = () => {
    onClickMinus(props.id);
  };

  const removeItem = () => {
    onClickTrash(props.id);
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="card-title">
        <p>{props.name}</p>
      </div>
      <div className="count">
        <Button onClick={decrease} name={"-"} />
        <p className="count">{count}</p>
        <Button onClick={increase} name={"+"} />
      </div>
      <div className="card-price">
        <p>
          <span>&#8364; </span>
          {props.price}
        </p>
      </div>
      <div className="remove">
        <Button name={"trash"} onClick={removeItem}>
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
    </div>
  );
};
