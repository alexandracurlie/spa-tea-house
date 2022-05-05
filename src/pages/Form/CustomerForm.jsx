import React, {useMemo} from "react";
import {useDispatch} from "react-redux";
import {NavButton, Page} from "../../components";
import {Checkbox} from "./Checkbox";
import {Input} from "./Input";
import {useStyles} from "./styles";
import {Textarea} from "./Textarea";
import {inputAction} from "../../redux/actions";
import {Formik, Field, Form} from "formik";
import {FormSchema, ORDER_URL} from "../../utilities";

//TODO: checkbox
//TODO: tooltips, validation, functionality
//TODO: submit button
//TODO: input refactoring

export const CustomerForm = () => {
  const styles = useStyles()

  const initialValues = useMemo(() => ({
    author: null,
    title: null,
    album: null,
    genres: null,
    coverFile: null,
  }), [])

  const dispatch = useDispatch()

  const onChangeValue = (id, value) => {
    dispatch(inputAction(id, value))
  }

  return (
      <Page title={"Fill the form below"}
            subtitle={"sorry, this page is under construction :("} >
        <div className="container">
          <Formik initialValues={initialValues}
                  onSubmit={onChangeValue}
                  validationSchema={FormSchema}>

            {({isSubmitting, setFieldValue}) => (
                <Form className={styles.form}>
                  <div className={`${styles.container} column-content`}>
                    <Field name={"name"}
                           label={"name"}
                           type={"text"}
                           component={Input}
                           placeholder={"name"}
                           required
                           onChange={(e, value) => {
                             setFieldValue('name', value);
                           }} />

                    <Field name={"phone"}
                           label={"phone"}
                           type={"tel"}
                           component={Input}
                           placeholder={"phone"}
                           required
                           onChange={(e, value) => {
                             setFieldValue('phone', value);
                           }} />

                    <Field name={"email"}
                           label={"email"}
                           type={"email"}
                           component={Input}
                           placeholder={"email"}
                           required
                           onChange={(e, value) => {
                             setFieldValue('email', value);
                           }} />

                    <Field name={"date"}
                           label={"date"}
                           type={"date"}
                           component={Input}
                           required
                           onChange={(e, value) => {
                             setFieldValue('date', value);
                           }} />

                    <Field name={"time"}
                           label={"time"}
                           type={"time"}
                           component={Input}
                           required
                           onChange={(e, value) => {
                             setFieldValue('time', value);
                           }} />

                    <Field name={"address"}
                           label={"address"}
                           type={"text"}
                           component={Input}
                           placeholder={"address"}
                           required
                           onChange={(e, value) => {
                             setFieldValue('address', value);
                           }} />

                    <Field name={"comment"}
                           label={"comment"}
                           type={"text"}
                           component={Textarea}
                           placeholder={"let us know if you need something else"}
                           rows={3}
                           onChange={(e, value) => {
                             setFieldValue('comment', value);
                           }} />

                    <Field label={"checkbox"}
                           type={"checkbox"}
                           component={Checkbox}
                           placeholder={"let us know if you need something else"}
                           rows={3}
                    />
                  </div>
                  <div className={styles.button}>
                    <NavButton path={ORDER_URL}
                               name={"Continue"}
                               type={"submit"}
                               disabled={isSubmitting} />
                  </div>
                </Form>
            )}
          </Formik>
        </div>
      </Page>
  );
};
