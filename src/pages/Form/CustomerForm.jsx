import React, {memo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Button, Page} from "../../components";
import {setUserForm} from "../../redux/actions";
import {Checkbox, Input, Textarea} from "../../components";
import {useStyles} from "../../components/Form/styles";
import {Formik, Field, Form} from "formik";
import {FormSchema, isEmptyObj, ORDER_URL} from "../../utilities";

export const CustomerForm = memo(() => {
  const styles = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const values = useSelector(({user}) => user.form)

  const onSubmit = (values) => {
    dispatch(setUserForm(values))
    history.push(ORDER_URL)
  }

  return (
      <Page title={"Fill the form below"}
            subtitle={"sorry, this page is under construction :("} >
        <div className="container">
          <Formik initialValues={values}
                  onSubmit={onSubmit}
                  validationSchema={FormSchema}>
            {({ handleChange,
                values,
                errors,
            }) => (
                  <Form className={styles.form}>
                    <div className={`${styles.container} column-content`}>
                      <Field name={"name"}
                             label={"name"}
                             type={"text"}
                             component={Input}
                             placeholder={"name"}
                             value={values.name}
                             onChange={handleChange}
                      />

                      <Field name={"phone"}
                             label={"phone"}
                             type={"tel"}
                             component={Input}
                             placeholder={"phone"}
                             value={values.phone}
                             onChange={handleChange}
                      />

                      <Field name={"email"}
                             label={"email"}
                             type={"email"}
                             component={Input}
                             placeholder={"email"}
                             value={values.email}
                             onChange={handleChange}
                      />

                      <Field name={"date"}
                             label={"date"}
                             type={"date"}
                             component={Input}
                             value={values.date}
                             onChange={handleChange}
                      />

                      <Field name={"time"}
                             label={"time"}
                             type={"time"}
                             component={Input}
                             value={values.time}
                             onChange={handleChange}
                      />

                      <Field name={"address"}
                             label={"address"}
                             type={"text"}
                             component={Input}
                             placeholder={"address"}
                             value={values.address}
                             onChange={handleChange}
                      />

                      <Field name={"comment"}
                             label={"comment"}
                             type={"text"}
                             component={Textarea}
                             placeholder={"let us know if you need something else"}
                             rows={3}
                             value={values.comment}
                             onChange={handleChange}
                      />

                      <Field label={"checkbox"}
                             type={"checkbox"}
                             component={Checkbox}
                             rows={3}
                      />
                    </div>
                    <div className={styles.button}>
                      <Button name={"Continue"}
                              type={"submit"}
                              disabled={!isEmptyObj(errors)}
                      />
                    </div>
                  </Form>
              )}
          </Formik>
        </div>
      </Page>
  );
})
