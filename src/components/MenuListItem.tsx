import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, Box } from '@material-ui/core';
import { NavigateNext as NextIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
}));

export type StateProps = {
    menuType: MenuType;
    docID: string;
    label: string;
    numArticle: number;
};

export type DispatchProps = {
    toggleOpen: () => void;
    fetchChapters: (docID: string) => void;
    fetchArticles: (docID: string) => void;
};

const MenuList: React.FC<StateProps & DispatchProps> = (props) => {
    const classes = useStyles();

    const handleClickLink = (): void => {
        if (props.menuType === 'default') {
            props.fetchChapters(props.docID);
            props.fetchArticles(props.docID);
        }
        props.toggleOpen();
    };

    const item = (
        <ListItem button={true}>
            <NextIcon />
            <ListItemText>
                <Box color="primary">
                    {props.label} ({String(props.numArticle)})
                </Box>
            </ListItemText>
        </ListItem>
    );

    if (props.numArticle > 0) {
        return (
            <Link to="/" className={classes.link} onClick={handleClickLink}>
                {item}
            </Link>
        );
    }
    return <React.Fragment>{item}</React.Fragment>;
};

export default MenuList;
