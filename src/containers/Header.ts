import { connect } from 'react-redux';
import Header, { StateProps, DispatchProps } from '../components/Header';
import { setMenuType, toggleOpen } from '../modules/menu';

export const mapStateToProps = (state: AppState): StateProps => ({
    open: state.menu.open,
    menuType: state.menu.menuType,
    chapters: state.chapter.rows,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    toggleOpen: (): Action => dispatch(toggleOpen()),
    setMenuType: (menuType: MenuType): Action => dispatch(setMenuType(menuType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
