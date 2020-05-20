import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

declare global {
    type AppState = {
        auth: AuthState;
    };

    type AppDispatch = ThunkDispatch<AppState, undefined, AnyAction>;

    type Action = {
        type: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    };
}
