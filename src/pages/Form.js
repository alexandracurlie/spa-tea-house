import { Main, Input, Select, Textarea } from "../components";
import { Link } from "react-router-dom";
import { formInput, formTextarea, formSelect } from "../other/collections";

//TODO: finish the form ASAP

export const Form = () => {
  return (
    <Main
      className={"form-container"}
      title={"Fill the form below"}
      subtitle={"sorry, this page is under construction :("}
    >
      <form>
        {formInput.map((item) => {
          return (
            <div className={"col-md"}>
              <Input props={item} />
            </div>
          );
        })}

        {formSelect.map((item) => {
          return (
            <div className={"col-md"}>
              <Select props={item} />
            </div>
          );
        })}

        {formTextarea.map((item) => {
          return (
            <div className={"col-bd"}>
              <Textarea props={item} />
            </div>
          );
        })}

        <div className="col-sm">
          <input
            className="checkbox"
            type="checkbox"
            id="checkbox"
            data-form="form"
            key={`input_checkbox_123`}
          />
          <label className="label" htmlFor="checkbox">
            I agreed with terms and conditions whatever it is
          </label>
        </div>

        <div className="col-bd btn-next-container">
          <Link to={"/"} className={"btn btn-primary"}>
            Home
          </Link>
        </div>
      </form>
    </Main>
  );
};
