import React from 'react';
import {
    Box,
    Link,
    CircularProgress,
    TableCell,
    TableRow,
    Table,
    TableHead,
    TableBody,
    TableSortLabel,
} from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import Pagination from './Pagination';

const useStyles = makeStyles(() => ({
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export type StateProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    rows: any;
    loading: boolean;
    error: string;
    rowsPerPage: number;
    currentPage: number;
};
export type DispatchProps = {
    setCurrentPage: (value: number) => Action;
    setRowsPerPage: (value: number) => Action;
};

export type SortMethod = 'desc' | 'asc';
const ListTable: React.FC<StateProps & DispatchProps & RouteComponentProps> = (props) => {
    const classes = useStyles();
    const [sortMethod, setSortMethod] = React.useState<SortMethod>('desc');
    const [orderBy, setOrderBy] = React.useState('CreatedAt');

    const handleEdit = (event: React.MouseEvent, path: string): void => {
        event.preventDefault();
        props.history.push(path);
    };

    const handleChangePage = (event: unknown, newPage: number): void => {
        props.setCurrentPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
        props.setRowsPerPage(parseInt(event.target.value, 10));
        props.setCurrentPage(0);
    };

    const handleRequestSort = (event: React.MouseEvent<unknown>, key: string): void => {
        event.preventDefault();
        setSortMethod(sortMethod === 'desc' ? 'asc' : 'desc');
        setOrderBy(key);
    };

    const progress = (
        <Box display="flex" justifyContent="center" alignItems="center" height={150}>
            <CircularProgress color="inherit" />
        </Box>
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tableRows = props.rows.map((row: any, index: number) => {
        return (
            <TableRow key={row.Id}>
                <TableCell align="center" data-testid={`name_row_${index}`}>
                    {row.Title}
                </TableCell>
                <TableCell align="center">
                    <Box mb={1} display="grid">
                        {dayjs(row.CreatedAt).format('YYYY-MM-DD')}
                    </Box>
                    <Box mb={1} display="grid">
                        {dayjs(row.CreatedAt).format('HH:mm:ss')}
                    </Box>
                </TableCell>
                <TableCell align="center">
                    <Box>
                        <Link
                            onClick={(e: React.MouseEvent): void => handleEdit(e, row)}
                            data-testid={'editCell' + index}
                        >
                            編集
                        </Link>
                    </Box>
                </TableCell>
            </TableRow>
        );
    });

    const pagination = (
        <Pagination
            count={props.rows.length}
            rowsPerPage={props.rowsPerPage}
            page={props.currentPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );

    const tableHeadLabels = [
        { name: '名前', code: 'Name', useSort: true },
        { name: 'コメント', code: 'Article', useSort: true },
        { name: '登録日時', code: 'CreatedAt', useSort: true },
        { name: '更新日時', code: 'UpdatedAt', useSort: true },
        { name: '', code: '', useSort: false },
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getLabel = (column: any): React.ReactElement => {
        if (!column.useSort) {
            return <React.Fragment>column.name</React.Fragment>;
        }

        return (
            <TableSortLabel
                active={orderBy === column.code}
                direction={orderBy === column.code ? sortMethod : 'desc'}
                onClick={(event: React.MouseEvent<HTMLAnchorElement>): void => handleRequestSort(event, column.code)}
                data-testid={`sortLabel_${column.code}`}
            >
                {column.name}
                {column.useSort && orderBy === column.code ? (
                    <span className={classes.visuallyHidden}>
                        {sortMethod === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                ) : null}
            </TableSortLabel>
        );
    };

    const table = (
        <React.Fragment>
            {pagination}
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {tableHeadLabels.map((column) => (
                            <TableCell
                                key={column.name}
                                align="center"
                                sortDirection={orderBy === column.code ? sortMethod : false}
                            >
                                {getLabel(column)}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>{tableRows}</TableBody>
            </Table>
        </React.Fragment>
    );

    return props.loading ? progress : table;
};

export default withRouter(ListTable);
