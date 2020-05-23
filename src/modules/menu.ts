import { AnyAction } from 'redux';

export type Action = {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
};

export type MenuState = {
    open: boolean;
    books: string[];
    documents: string[];
    chapters: string[];
};

export const initialState: MenuState = {
    open: false,
    books: ['book1', 'book2'],
    documents: ['document1', 'document2'],
    chapters: ['chapter1', 'chapter2'],
};

//=============================================================================
//Reducers
//=============================================================================
export default (state: MenuState = initialState, action: AnyAction): MenuState => {
    switch (action.type) {
        case 'MENU_TOGGLE_MENU':
            return {
                ...state,
                open: !state.open,
            };
        default:
            return state;
    }
};

//=============================================================================
//Actions
//=============================================================================
export const toggleMenu = (): Action => ({
    type: 'MENU_TOGGLE_MENU',
});
