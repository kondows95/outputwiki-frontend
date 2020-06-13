import { connect } from 'react-redux';
import MenuList, { StateProps, DispatchProps } from '../components/MenuList';
import { fetchDocumentations } from '../modules/documentation';

export const mapStateToProps = (state: AppState): StateProps => ({
    menuType: state.menu.menuType,
    docMap: state.documentation.map,
    chapters: state.chapter.rows,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    fetchDocumentations: (): Promise<void> => dispatch(fetchDocumentations()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
