export const inputAction = (id, value) => ({
    type: "SET_VALUE",
    payload: value,
    id: id
});

export const clearInputs = () => ({
    type: "CLEAR_INPUTS",
});