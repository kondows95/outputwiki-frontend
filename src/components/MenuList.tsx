import React from 'react';
import { List, ListSubheader, Box, Grid } from '@material-ui/core';

import MenuListItem from '../containers/MenuListItem';

export type StateProps = {
    menuType: MenuType;
    docMap: Map<string, Documentation[]>;
    chapters: Chapter[];
};

export type DispatchProps = {
    fetchDocumentations: () => void;
};

const MenuList: React.FC<StateProps & DispatchProps> = (props) => {
    const isFirstRef = React.useRef(true);
    React.useEffect(() => {
        if (isFirstRef.current) {
            isFirstRef.current = false;
            props.fetchDocumentations();
            console.log('###fetchDocumentations', props.docMap);
        }
    }, [props, props.docMap]);

    const getChapters = (): React.ReactElement => {
        const list: React.ReactElement[] = [];
        for (const row of props.chapters) {
            list.push(<MenuListItem docID={row.ID} label={row.Title} numArticle={row.NumArticles} />);
        }
        return <List component="nav">{list}</List>;
    };

    const getDocs = (): React.ReactElement[] => {
        const list: React.ReactElement[] = [];
        props.docMap.forEach((rows: Documentation[], key: string) => {
            list.push(
                <List
                    key={key}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {key}
                        </ListSubheader>
                    }
                >
                    <Box display="flex" flexDirection="column">
                        <Grid container>
                            {rows.map((row: Documentation) => {
                                return (
                                    <Grid xs={12} sm={4} md={3} item key={row.ID}>
                                        <MenuListItem docID={row.ID} label={row.Title} numArticle={row.NumArticles} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </List>
            );
        });
        return list;
    };

    return <React.Fragment>{props.menuType === 'chapters' ? getChapters() : getDocs()}</React.Fragment>;
};

export default MenuList;
