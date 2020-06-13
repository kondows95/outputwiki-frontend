import React from 'react';
import { AppBar, Toolbar, Button, Drawer } from '@material-ui/core';
import { ExpandMore as DownIcon, ExpandLess as UpIcon } from '@material-ui/icons';
import UserMenu from '../containers/UserMenu';
import MenuList from '../containers/MenuList';
import { ToolbarSpacer } from 'material-ui-basic-parts';

export type StateProps = {
    open: boolean;
    menuType: MenuType;
    chapters: Chapter[];
};

export type DispatchProps = {
    toggleOpen: () => void;
    setMenuType: (menuType: MenuType) => void;
};

const Header: React.FC<StateProps & DispatchProps> = (props) => {
    const showMenu = (myMenuType: MenuType): React.ReactElement => {
        let icon = <DownIcon />;
        let color: 'inherit' | 'secondary' | 'primary' = 'inherit';
        if (props.open && props.menuType === myMenuType) {
            color = 'secondary';
            icon = <UpIcon />;
        }

        return (
            <Button
                disabled={myMenuType === 'chapters' && props.chapters.length === 0 ? true : false}
                onClick={(): void => {
                    if (!props.open || props.menuType === myMenuType) {
                        props.toggleOpen();
                    }
                    props.setMenuType(myMenuType);
                }}
                color={color}
            >
                {myMenuType === 'default' ? 'Menu' : 'Chapters'}
                {icon}
            </Button>
        );
    };

    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                    {showMenu('default')}
                    {showMenu('chapters')}
                    <UserMenu />
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="top"
                variant="persistent"
                open={props.open}
                onClose={props.toggleOpen}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <ToolbarSpacer />
                <MenuList />
            </Drawer>
        </React.Fragment>
    );
};

export default Header;
