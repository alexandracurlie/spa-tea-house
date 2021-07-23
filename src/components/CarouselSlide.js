
export const CarouselSlide = ({ img, text, className }) => {
  return (
    <div className="carousel-item fade">
      <p className={className}>{text}</p>
      <img src={img} alt={""} width={"100%"} />
    </div>
  );
};
