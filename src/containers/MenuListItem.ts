import { connect } from 'react-redux';
import MenuListItem, { DispatchProps } from '../components/MenuListItem';
import { toggleOpen } from '../modules/menu';
import { fetchChapters } from '../modules/chapter';
import { fetchArticles } from '../modules/article';

export type MyStateProps = {
    menuType: MenuType;
};

export const mapStateToProps = (state: AppState): MyStateProps => ({
    menuType: state.menu.menuType,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
    toggleOpen: (): Action => dispatch(toggleOpen()),
    fetchChapters: (docID: string): Promise<void> => dispatch(fetchChapters(docID)),
    fetchArticles: (docID: string): Promise<void> => dispatch(fetchArticles(docID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuListItem);
