import { connect } from 'react-redux';
import Header, { StateProps, DispatchProps } from '../components/Header';
import { setMenuType, toggleOpen } from '../modules/menu';
import { fetchChapters } from '../modules/chapter';

export const mapStateToProps = (state: AppState): StateProps => ({
    open: state.menu.open,
    menuType: state.menu.menuType,
    chapters: state.chapter.rows,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    toggleOpen: (): Action => dispatch(toggleOpen()),
    setMenuType: (menuType: MenuType): Action => dispatch(setMenuType(menuType)),
    fetchChapters: (documentationID: string): Promise<void> => dispatch(fetchChapters(documentationID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
