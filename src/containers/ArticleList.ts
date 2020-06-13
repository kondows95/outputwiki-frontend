import { connect } from 'react-redux';
import ArticleList, { StateProps, DispatchProps } from '../components/ArticleList';

export const mapStateToProps = (state: AppState): StateProps => ({
    rows: state.article.rows,
    loading: state.article.loading,
    error: state.article.error,
});

export const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
