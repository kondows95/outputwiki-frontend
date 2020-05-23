import { connect } from 'react-redux';
import UserMenu from '../components/UserMenu';
import { signOut, AuthState } from 'amplify-auth-redux-module';

export type StateProps = {
    user: AuthState['user'];
    loading: AuthState['loading'];
};

export const mapStateToProps = (state: AppState): StateProps => ({
    user: state.auth.user,
    loading: state.auth.loading,
});

export type DispatchProps = {
    signOut: () => Promise<void>;
};

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    signOut: (): Promise<void> => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
