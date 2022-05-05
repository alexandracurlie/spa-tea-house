import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import {Page} from "../components";
import {clearCart, clearInputs} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";

export const Order = () => {
    const dispatch = useDispatch()

    const { name, phone, address, date, time } = useSelector(({ user }) => user)
    const { totalCartCost } = useSelector(({ cart }) => cart)

    const onClick = () => {
        dispatch(clearCart())
        dispatch(clearInputs())
    }

  return (
    <Page className={"order"} title={"Woohoo!"} subtitle={"Order № 123123123"}>

      <div className={"information"}>
        <p>
          Your order will arrive on <span>{date.split("-").reverse().join(".")}</span> from
          <span>{time}</span>
        </p>
        <p>
          Our Delivery Guy will call you <span>{phone}</span> a few minutes
          before he reaches the address <span>{address}</span>
        </p>
        <p>
          Total cost of your order<span> &#8364; {totalCartCost}</span>
        </p>
        <p className="goodbye">Thank you for your order, {_.capitalize(name)}</p>
      </div>

        <div className="col-bd btn-next-container">
            <Link to={"/spa-tea-house/"} className={"btn btn-primary"} onClick={onClick}>
                Home
            </Link>
        </div>
    </Page>
  );
};
