import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader, ListItem, ListItemText, Divider, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export type StateProps = {
    open: boolean;
    books: string[];
    documents: string[];
    chapters: string[];
};

export type DispatchProps = {
    toggleMenu: () => void;
};

const MenuContents: React.FC<StateProps & DispatchProps> = (props) => {
    const classes = useStyles();
    const map = new Map<string, string[]>();
    map.set('Books', props.books);
    map.set('Documents', props.documents);

    const list: React.ReactElement[] = [];
    map.forEach((items: string[], key: string) => {
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
                <Divider />
                <Box display="flex" flexDirection="column">
                    {items.map((title: string, i: number) => {
                        return (
                            <React.Fragment key={i}>
                                <Link to="/customers" className={classes.link} onClick={props.toggleMenu}>
                                    <ListItem button className="icon">
                                        <ListItemText>{title}</ListItemText>
                                    </ListItem>
                                </Link>
                                <Divider />
                            </React.Fragment>
                        );
                    })}
                </Box>
            </List>
        );
    });
    return <React.Fragment>{list}</React.Fragment>;
};

export default MenuContents;
