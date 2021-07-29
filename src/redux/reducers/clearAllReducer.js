
const clearAllReducer = (state, action) => {
    switch (action.type) {

        case "CLEAR_ALL":
            return {
                ...state,
                [action.id]: action.payload,
            };
        default:
            return state;
    }
};

export default clearAllReducer;

