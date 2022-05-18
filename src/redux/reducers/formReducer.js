
//TODO: not a real time store updates!!
const initialState = {
    form: {
        name: "",
        phone: "",
        email: "",
        address: "",
        date: "",
        time: "",
        comment: ""
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_USER_INFO":
            return {
                ...state,
                form: action.payload,
            };

        default:
            return state;
    }
};

export default formReducer;

