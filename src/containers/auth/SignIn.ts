import { connect } from 'react-redux';
import { SignIn } from 'material-ui-amplify-auth';
import { changeAuthState, signIn, AuthState } from 'amplify-auth-redux-module';

export type StateProps = {
    authState: AuthState['authState'];
    loading: AuthState['loading'];
    error: AuthState['error'];
};

export const mapStateToProps = (state: AppState): StateProps => ({
    authState: state.auth.authState,
    loading: state.auth.loading,
    error: state.auth.error,
});

export type DispatchProps = {
    changeAuthState: (value: string) => Action;
    signIn: (email: string, password: string) => Promise<void>;
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    changeAuthState: (value: string): Action => dispatch(changeAuthState(value)),
    signIn: (email: string, password: string): Promise<void> => dispatch(signIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
