import { connect } from 'react-redux';
import MenuContents, { StateProps, DispatchProps } from '../components/MenuContents';
import { toggleOpen } from '../modules/menu';
import { fetchDocumentations } from '../modules/documentation';
import { fetchChapters } from '../modules/chapter';

export const mapStateToProps = (state: AppState): StateProps => ({
    open: state.menu.open,
    menuType: state.menu.menuType,
    docMap: state.documentation.map,
    chapters: state.chapter.rows,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    toggleOpen: (): Action => dispatch(toggleOpen()),
    fetchDocumentations: (): Promise<void> => dispatch(fetchDocumentations()),
    fetchChapters: (id: string): Promise<void> => dispatch(fetchChapters(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContents);
