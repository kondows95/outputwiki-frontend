import { connect } from 'react-redux';
import { ConfirmSignUp } from 'material-ui-amplify-auth';
import { changeAuthState, confirmSignUp, resendSignUp, AuthState } from 'amplify-auth-redux-module';

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
    confirmSignUp: (email: string, code: string) => Promise<void>;
    resendSignUp: (email: string) => Promise<void>;
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    changeAuthState: (value: string): Action => dispatch(changeAuthState(value)),
    confirmSignUp: (email: string, code: string): Promise<void> => dispatch(confirmSignUp(email, code)),
    resendSignUp: (email: string): Promise<void> => dispatch(resendSignUp(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSignUp);
