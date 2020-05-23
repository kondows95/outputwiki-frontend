import { connect } from 'react-redux';
import Header, { StateProps, DispatchProps } from '../components/Header';
import { toggleMenu } from '../modules/menu';

export const mapStateToProps = (state: AppState): StateProps => ({
    open: state.menu.open,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    toggleMenu: (): Action => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
