import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Main, Input, Select, Textarea } from "../components";
import { inputAction } from "../redux/actions";

//TODO: CHECKBOX!!!!!!!!!
//TODO: tooltips, form validation

export const Form = () => {

  const dispatch = useDispatch()

  const onChangeValue = (id, value) => {
    dispatch(inputAction(id, value))
  }

  return (
      <Main
          className={"form-container"}
          title={"Fill the form below"}
          subtitle={"sorry, this page is under construction :("}
      >
        <form>
          <div className={"col-md"} key={`input_order_form_name`}>
            <Input type={"text"}
                   name={"name"}
                   id={"name"}
                   className={"form-control"}
                   placeholder={"name"}
                   required={true}
                   onChange={onChangeValue}
            />
          </div>
          <div className={"col-md"} key={`input_order_form_phone`}>
            <Input type={"tel"}
                   name={"phone"}
                   id={"phone"}
                   className={"form-control"}
                   placeholder={"phone"}
                   required={true}
                   onChange={onChangeValue}
            />
          </div>
          <div className={"col-md"} key={`input_order_form_email`}>
            <Input type={"email"}
                   name={"email"}
                   id={"email"}
                   className={"form-control"}
                   placeholder={"email"}
                   required={true}
                   onChange={onChangeValue}
            />
          </div>
          <div className={"col-bd"} key={`input_order_form_address`}>
            <Input type={"text"}
                   name={"address"}
                   id={"address"}
                   className={"form-control"}
                   required={true}
                   onChange={onChangeValue}
            />
          </div>
          <div className={"col-md"} key={`input_order_form_date`}>
            <Input type={"date"}
                   name={"date"}
                   id={"date"}
                   className={"form-control"}
                   required={true}
                   onChange={onChangeValue}
            />
          </div>
          <div className={"col-md"} key={`select_order_form_time`}>
            <Select type={"time"}
                  name={"time"}
                  id={"time"}
                  className={"form-control"}
                  required={true}
                  defaultValue={"--:--"}
                  options={["--:--", "9 am to 3 pm", "3 pm to 9 pm"]}
                  onChange={onChangeValue}
            />
          </div>
          <div className={"col-bd"} key={`input_order_form_textarea`}>
            <Textarea name={"comment"}
                      id={"comment"}
                      className={"form-control"}
                      placeholder={"let us know if you need something else"}
                      rows={3}
                      onChange={onChangeValue}
            />
          </div>
          <div className="col-sm">
            <input
                className="checkbox"
                type="checkbox"
                id="checkbox"
                data-form="form"
                key={`checkbox_order_form`}
            />
            <label className="label" htmlFor="checkbox">
              I agreed with terms and conditions whatever it is
            </label>
          </div>

          <div className="col-bd btn-next-container">
            <Link to={"/spa-tea-house/order"} className={"btn btn-primary"}>
              Continue
            </Link>
          </div>
        </form>
      </Main>
  );
};