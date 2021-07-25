import React from "react";
import { Section } from "../components";

//TODO: automatic carousel instead of slider
//TODO: make a component of STEP cards

export const Home = () => {

  return (
    <main>
      <Section
        className={"info"}
        title={"Easy way to get you favorite flavor"}
        subtitle={"just follow the instruction below"}
      >
        <div className={"steps-container"}>
          <div className={"col"}>
            <img src={"https://alexandracurlie.github.io/spa-tea-house/icons/logo-cart.png"} alt={"logo"} width={50} />
            <h3 className={"card-title"}>Step 1</h3>
            <p className={"description"}>
              add items to the cart, fill the form, choose date and time
            </p>
          </div>
          <div className={"col"}>
            <img src={"https://alexandracurlie.github.io/spa-tea-house/icons/logo-truck.png"} alt={"logo"} width={50} />
            <h3 className={"card-title"}>Step 2</h3>
            <p className={"description"}>
              wait for a while, delivery takes 2-3 days depends of your location
            </p>
          </div>
          <div className={"col"}>
            <img src={"https://alexandracurlie.github.io/spa-tea-house/icons/logo-cup.png"} alt={"logo"} width={50} />
            <h3 className={"card-title"}>Step 3</h3>
            <p className={"description"}>
              now you can enjoy the most incredible tea in your life
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
};
