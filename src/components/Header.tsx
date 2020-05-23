import React from 'react';
import { AppBar, IconButton, Toolbar, Button, Divider, Drawer } from '@material-ui/core';
import { Close as CloseIcon, ExpandMore as DownIcon } from '@material-ui/icons';
import UserMenu from '../containers/UserMenu';
import MenuContents from '../containers/MenuContents';

export type StateProps = {
    open: boolean;
};

export type DispatchProps = {
    toggleMenu: () => void;
};

const Header: React.FC<StateProps & DispatchProps> = (props) => {
    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                    <Button onClick={props.toggleMenu} color="inherit">
                        Menu
                        <DownIcon />
                    </Button>
                    <Button onClick={props.toggleMenu} color="inherit">
                        Book
                        <DownIcon />
                    </Button>
                    <UserMenu />
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    anchor="top"
                    variant="temporary"
                    open={props.open}
                    onClose={props.toggleMenu}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <div>
                        <IconButton data-testid="CloseMenu" onClick={props.toggleMenu}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <MenuContents />
                </Drawer>
            </nav>
        </React.Fragment>
    );
};

export default Header;
