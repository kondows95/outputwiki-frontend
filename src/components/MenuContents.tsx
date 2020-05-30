import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader, ListItem, ListItemText, Box, Grid } from '@material-ui/core';
import { NavigateNext as NextIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
}));

export type StateProps = {
    open: boolean;
    menuType: MenuType;
    docMap: Map<string, Documentation[]>;
    chapters: Chapter[];
};

export type DispatchProps = {
    toggleOpen: () => void;
    fetchDocumentations: () => void;
    fetchChapters: (id: string) => void;
};

const MenuContents: React.FC<StateProps & DispatchProps> = (props) => {
    const classes = useStyles();
    React.useEffect(() => {
        props.fetchDocumentations();
        console.log('###fetchDocumentations', props.docMap);
    }, []);

    const handleClickLink = (id: string): void => {
        if (props.menuType === 'default') {
            props.fetchChapters(id);
        }
        props.toggleOpen();
    };

    const getItem = (label: string, id: string): React.ReactElement => {
        return (
            <Grid xs={12} sm={4} md={3} item key={id}>
                <Link to="/" className={classes.link} onClick={(): void => handleClickLink(id)}>
                    <ListItem button={true}>
                        <NextIcon />
                        <ListItemText>{label}</ListItemText>
                    </ListItem>
                </Link>
            </Grid>
        );
    };

    const getChapters = (): React.ReactElement[] => {
        const list: React.ReactElement[] = [];
        for (const row of props.chapters) {
            list.push(
                <List key={row.ID} component="nav">
                    <Box display="flex" flexDirection="column">
                        <Grid container>{getItem(row.ID, row.ID)}</Grid>
                    </Box>
                </List>
            );
        }
        return list;
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
                                return getItem(row.ID, row.ID);
                            })}
                        </Grid>
                    </Box>
                </List>
            );
        });
        return list;
    };

    const getContents = (): React.ReactElement[] => {
        if (props.menuType === 'chapters') {
            return getChapters();
        }
        return getDocs();
    };

    return <React.Fragment>{getContents()}</React.Fragment>;
};

export default MenuContents;
