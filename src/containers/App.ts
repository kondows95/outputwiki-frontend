import { connect } from 'react-redux';
import App, { StateProps, DispatchProps } from '../components/App';
import { fetchAuthedUser } from 'amplify-auth-redux-module';

export const mapStateToProps = (state: AppState): StateProps => ({
    user: state.auth.user,
    loading: state.auth.loading,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    fetchAuthedUser: (): Promise<void> => dispatch(fetchAuthedUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
