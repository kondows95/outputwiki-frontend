import { connect } from 'react-redux';
import Login from '../components/Login';
import { changeAuthState, signOut, AuthState } from 'amplify-auth-redux-module';

export type StateProps = {
    authState: AuthState['authState'];
};

export const mapStateToProps = (state: AppState): StateProps => ({
    authState: state.auth.authState,
});

export type DispatchProps = {
    signOut: () => Promise<void>;
    changeAuthState: (value: string) => Action;
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    signOut: (): Promise<void> => dispatch(signOut()),
    changeAuthState: (value: string): Action => dispatch(changeAuthState(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
