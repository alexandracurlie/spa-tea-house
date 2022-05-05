import React from "react";
import {Article, Section} from "../../components";
import {aboutUsDescription, infoDelivery} from "../../utilities";

export const Home = () => {

  return (
    <main>
      <div className="container">
        <Article title={"About us"}>
          <Section {...aboutUsDescription} />
        </Article>
        <Article title={"Easy way to get you favorite flavor"}>
          {infoDelivery.map(item =>
              <Section key={item.id} {...item} />)}
        </Article>
      </div>
    </main>
  );
};
