
const initialState = {
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    time: "",
    comment: ""
};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_VALUE":
            return {
                ...state,
                [action.id]: action.payload,
            };
        case "CLEAR_INPUTS":
            return {
                name: "",
                phone: "",
                email: "",
                address: "",
                date: "",
                time: "",
                comment: ""
            }
        default:
            return state;
    }
};

export default inputReducer;

