
export const Button = (props) => {
  return (
    <button
      name={props.name}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children || props.name}
    </button>
  );
};
