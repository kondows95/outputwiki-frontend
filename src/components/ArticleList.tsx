import React from 'react';
import { Box, Grid, Divider } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ToolbarSpacer } from 'material-ui-basic-parts';
import Progress from './Progress';
//import dayjs from 'dayjs';

export type StateProps = {
    rows: Article[];
    loading: boolean;
    error: string;
};

export type DispatchProps = {};

const ArticleList: React.FC<StateProps & DispatchProps & RouteComponentProps> = (props) => {
    const items: React.ReactElement[] = [];
    for (const row of props.rows) {
        items.push(
            <Grid key={row.ID} item xs={12}>
                <Box p={1} bgcolor="pink">
                    {row.ID}
                    <Divider />
                </Box>
            </Grid>
        );
    }
    const contents = (
        <Box display="flex" flexDirection="column">
            <ToolbarSpacer />
            <Grid container>{items}</Grid>
        </Box>
    );

    return props.loading ? <Progress /> : contents;
};

export default withRouter(ArticleList);
