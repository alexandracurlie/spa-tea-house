export const inputAction = (value) => ({
    type: "SET_USER_INFO",
    payload: value,
});

export const clearInputs = () => ({
    type: "CLEAR_INPUTS",
});
