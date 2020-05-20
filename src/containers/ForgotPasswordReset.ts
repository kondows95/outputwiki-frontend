import { connect } from 'react-redux';
import { ForgotPasswordReset } from 'material-ui-amplify-auth';
import { changeAuthState, forgotPasswordSubmit, AuthState } from 'amplify-auth-redux-module';

export type StateProps = {
    authState: AuthState['authState'];
    loading: AuthState['loading'];
    error: AuthState['error'];
    email: AuthState['email'];
};

export const mapStateToProps = (state: AppState): StateProps => ({
    authState: state.auth.authState,
    loading: state.auth.loading,
    error: state.auth.error,
    email: state.auth.email,
});

export type DispatchProps = {
    changeAuthState: (value: string) => Action;
    forgotPasswordSubmit: (email: string, code: string, password: string) => Promise<void>;
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    changeAuthState: (value: string): Action => dispatch(changeAuthState(value)),
    forgotPasswordSubmit: (email: string, code: string, password: string): Promise<void> =>
        dispatch(forgotPasswordSubmit(email, code, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordReset);
