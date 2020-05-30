import React from 'react';
import { TablePagination } from '@material-ui/core';
import { LabelDisplayedRowsArgs } from '@material-ui/core/TablePagination';

type Props = {
    count: number;
    rowsPerPage: number;
    page: number;
    onChangePage: (event: unknown, value: number) => void;
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Pagination: React.FC<Props> = ({ count, rowsPerPage, page, onChangePage, onChangeRowsPerPage }) => {
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 20, 50, 100]}
            component={'div'}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage}
            // labelRowsPerPage={<Box>表示件数</Box>}
            labelRowsPerPage="表示件数"
            onChangeRowsPerPage={onChangeRowsPerPage}
            labelDisplayedRows={(args: LabelDisplayedRowsArgs): React.ReactNode => {
                // return (<Box>全{args.count}件中 {args.from}〜{args.to}を表示</Box>)
                return `全${args.count}件中 ${args.from}〜${args.to}を表示`;
            }}
            SelectProps={{
                SelectDisplayProps: {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    'data-testid': 'rowsPerPageSelect',
                },
            }}
        />
    );
};
export default Pagination;
