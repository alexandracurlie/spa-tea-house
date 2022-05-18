import * as Yup from 'yup';

const nameRegexp = /^([а-яёА-ЯЁa-zA-Z]{1,10})(\-)?([а-яёА-ЯЁa-zA-Z]{1,10})$/gi;
const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const emailRegexp = /^[a-z0-9\-!#$%&'*.+\/=?^_`{|}~]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/gi;

export const FormSchema = Yup.object({
  name: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .min(2, 'Must be 2 characters or more')
      .matches(nameRegexp, 'Invalid name')
      .required("required"),

  phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required("required"),

  email: Yup.string()
      .matches(emailRegexp, 'Email is not valid')
      .required("required"),

  date: Yup.string()
      .required("required"),

  time: Yup.string()
      .required("required"),

  address: Yup.string()
      .required("required"),
});
