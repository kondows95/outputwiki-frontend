import { connect } from 'react-redux';
import App from '../components/App';
import { fetchAuthedUser, AuthState } from 'amplify-auth-redux-module';

export type StateProps = {
    user: AuthState['user'];
    authState: AuthState['authState'];
    loading: AuthState['loading'];
};

export const mapStateToProps = (state: AppState): StateProps => ({
    user: state.auth.user,
    authState: state.auth.authState,
    loading: state.auth.loading,
});

export type DispatchProps = {
    fetchAuthedUser: () => Promise<void>;
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    fetchAuthedUser: (): Promise<void> => dispatch(fetchAuthedUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
