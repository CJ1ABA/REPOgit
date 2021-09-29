import { CLICK_THE_CHECKBOX } from './types'
const initialState = {
    isVisible: false,
};

export function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CLICK_THE_CHECKBOX:
            return {
                ...state,
                isVisible: !state.isVisible
            };
        default:
            return state;
    }
};