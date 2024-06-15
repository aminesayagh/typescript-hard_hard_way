import { GlobalReducer } from './types';


declare global {
    interface GlobalReducerEvent {
        LOG_IN: {}
    }
}

export const userReducer: GlobalReducer<{ id: string }> = (state, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return { id: '123' };
        default:
            return state;
    }
}