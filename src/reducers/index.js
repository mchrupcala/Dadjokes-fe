export const initialState = {
    title: "Redux Store"
};


export function reducer(state = initialState, action) {
    switch(action.type) {
        // case UPDATE_TITLE:
        //     return {
        //         ...state,
        //         title: action.payload;
        //     }
        default:
            return state;
    }
}

