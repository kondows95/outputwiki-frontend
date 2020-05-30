import { connect } from 'react-redux';
import ListTable, { StateProps } from '../components/ListTable';

export const mapStateToProps = (state: AppState): StateProps => ({
    rows: state.documentation.rows,
    loading: state.documentation.loading,
    error: state.documentation.error,
    rowsPerPage: 10,
    currentPage: 0,
});

export default connect(mapStateToProps, null)(ListTable);
