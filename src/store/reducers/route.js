import { SET_ROUTES_LIST } from "../actionTypes";

const initialState = {
    routeArr: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_ROUTES_LIST: {
            const { routeArr } = action.payload;
            return {
                ...state,
                routeArr
            };
        }
        default:
            return state;
    }
}
