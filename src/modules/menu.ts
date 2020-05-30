import { AnyAction } from 'redux';

export type Action = {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
};

export type MenuState = {
    open: boolean;
    menuType: MenuType;
};

export const initialState: MenuState = {
    open: false,
    menuType: 'default',
};

//=============================================================================
//Reducers
//=============================================================================
export default (state: MenuState = initialState, action: AnyAction): MenuState => {
    switch (action.type) {
        case 'MENU_TOGGLE_OPEN':
            return {
                ...state,
                open: !state.open,
            };
        case 'MENU_SET_MENU_TYPE':
            return {
                ...state,
                menuType: action.payload,
            };
        default:
            return state;
    }
};

//=============================================================================
//Actions
//=============================================================================
export const toggleOpen = (): Action => ({
    type: 'MENU_TOGGLE_OPEN',
});

export const setMenuType = (menuType: MenuType): Action => ({
    type: 'MENU_SET_MENU_TYPE',
    payload: menuType,
});
