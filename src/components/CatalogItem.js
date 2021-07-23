import { Button, IncDecBTNs} from "./index";

export const CatalogItem = ({ props, addToCart, count, decrease }) => {
  const onAddItem = () => {
    addToCart(props);
  };

  const onDecrease = () => {
    decrease(props.id);
  };

  return (
    <div className="card" data-item="card" id={props.id} key={props.id}>
      <img src={props.img} alt={props.name} width={200} height={200} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-price">
          <span>&#8364; </span>
          {props.price}
          <span> oz</span>
        </p>
      </div>
      <div className="container-add-item">
        {!count ? (
          <Button className={"btn add-btn"} name={"add"} onClick={onAddItem} />
        ) : (
          <IncDecBTNs count={count} onClick={[onAddItem, onDecrease]} />
        )}
      </div>
    </div>
  );
};
