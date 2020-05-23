import { connect } from 'react-redux';
import MenuContents, { StateProps, DispatchProps } from '../components/MenuContents';
import { toggleMenu } from '../modules/menu';

export const mapStateToProps = (state: AppState): StateProps => ({
    open: state.menu.open,
    books: state.menu.books,
    documents: state.menu.documents,
    chapters: state.menu.chapters,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    toggleMenu: (): Action => dispatch(toggleMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContents);
