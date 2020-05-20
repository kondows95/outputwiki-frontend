import { connect } from 'react-redux';
import { ForgotPassword } from 'material-ui-amplify-auth';
import { changeAuthState, forgotPassword, AuthState } from 'amplify-auth-redux-module';

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

type DispatchProps = {
    changeAuthState: (value: string) => Action;
    forgotPassword: (email: string) => Promise<void>;
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    changeAuthState: (value: string): Action => dispatch(changeAuthState(value)),
    forgotPassword: (email: string): Promise<void> => dispatch(forgotPassword(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
