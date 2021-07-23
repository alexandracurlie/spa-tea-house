export const Section = ({ title, subtitle, className, children }) => {
  return (
    <section className={className}>
      <div className="container">
        <h2 className="title"> {title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </section>
  );
};

export const Main = ({ title, subtitle, className, children }) => {
  return (
    <main className={className}>
      <div className="container">
        <h2 className="title"> {title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </main>
  );
};
