import { Main, CartItem } from "../components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, decreaseCount, removeItemFromCart} from "../redux/actions";

export const Cart = () => {
  const dispatch = useDispatch();

  const { items, totalCartCost } = useSelector(({ cart }) => cart);

  const groupedItems = Object.keys(items).map((key) => items[key].items[0]);

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const increase = (item) => {
    dispatch(addItemToCart(item));
  };

  const decrease = (item) => {
    dispatch(decreaseCount(item));
  };

  return (
    <Main
      className={"cart"}
      title={"Cart"}
      subtitle={
        groupedItems.length === 0
          ? "oh, no! the cart is empty!"
          : "what an awesome choice!"
      }
    >
      <div className="cart-container">
        {groupedItems &&
          groupedItems.map((item) => (
            <CartItem
              props={item}
              key={`${item.name}_${item.id}`}
              count={items[item.id].items.length}
              onClickTrash={removeItem}
              onClickPlus={increase}
              onClickMinus={decrease}
            />
          ))}
      </div>
      <div className="total-container">
        <p className="total">
          Total<span>&#8364;</span>
          {totalCartCost}
        </p>

        <Link to={"/form"}>
          <button
            className="btn btn-primary"
            disabled={groupedItems.length === 0}
          >
            Continue
          </button>
        </Link>
      </div>
    </Main>
  );
};
