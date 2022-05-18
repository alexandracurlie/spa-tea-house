import {capitalize} from "../../utilities";

export const setUserInfo = (value) => ({
    type: "SET_USER_INFO",
    payload: value,
});

export const clearForm = () => ({
    type: "CLEAR_FORM",
});

export const setUserForm = (form) => (dispatch) => {
    const name = capitalize(form.name)
    const date = form.date.split("-").reverse().join(".")

    dispatch(setUserInfo({...form, name, date}))
}



