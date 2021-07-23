import { Button, Main } from "../components";
import { Link } from "react-router-dom";

//TODO:  the final order after filled form

export const Order = () => {
  return (
    <Main className={"order"} title={"Woohoo!"} subtitle={"Order № 123123123"}>
      <div className={"information"}>
        <p>
          Wait for a delivery on <span>01.12.2021</span> from{" "}
          <span>3pm to 9 pm</span>
        </p>
        <p>
          Our Delivery Guy will call you <span>89701234561</span> a few minutes
          before he reaches the address <span>Moscow Kievskaya 5</span>
        </p>
        <p>
          Total cost of your order<span> &#8364; 22</span>
        </p>
        <p className="subtitle">Thank you for your order, Anton!</p>
      </div>

      <Link to={"/"} exact>
        <Button className="btn-primary" name={"Main page"} />
      </Link>
    </Main>
  );
};
