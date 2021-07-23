import React from "react";
import { Section, CarouselSlide, Button } from "../components";
import { slides } from "../other/collections";

//TODO: automatic carousel instead of slider
//TODO: make a component of STEP cards

export const Home = () => {
  const [carousel, setCarousel] = React.useState(1);

  const onInc = () => {
    carousel === 3 ? setCarousel(1) : setCarousel(carousel + 1);
  };

  const onDec = () => {
    carousel === 1 ? setCarousel(3) : setCarousel(carousel - 1);
  };

  return (
    <main>
      <Section
        className={"about-us"}
        title={"About Us"}
        subtitle={"a grand tea adventure"}
      >
        <div className={"intro"}>
          <Button className={"btn btn-primary"} name={"<"} onClick={onDec}>
            <i className="fas fa-angle-left" />
          </Button>

          <div id="carousel" className="carousel">
            {slides &&
              slides
                .filter((slide) => slide.id === carousel)
                .map((slide) => (
                  <CarouselSlide
                    className={slide.className}
                    img={slide.img}
                    text={slide.text}
                    key={`slide_${slide.id}`}
                  />
                ))}
          </div>
          <Button className={"btn btn-primary"} name={">"} onClick={onInc}>
            <i className="fas fa-angle-right" />
          </Button>
        </div>
      </Section>
      <Section
        className={"info"}
        title={"Easy way to get you favorite flavor"}
        subtitle={"just follow the instruction below"}
      >
        <div className={"steps-container"}>
          <div className={"col"}>
            <img src={"icons/logo-cart.png"} alt={"logo"} width={50} />
            <h3 className={"card-title"}>Step 1</h3>
            <p className={"description"}>
              add items to the cart, fill the form, choose date and time
            </p>
          </div>
          <div className={"col"}>
            <img src={"icons/logo-truck.png"} alt={"logo"} width={50} />
            <h3 className={"card-title"}>Step 2</h3>
            <p className={"description"}>
              wait for a while, delivery takes 2-3 days depends of your location
            </p>
          </div>
          <div className={"col"}>
            <img src={"icons/logo-cup.png"} alt={"logo"} width={50} />
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
