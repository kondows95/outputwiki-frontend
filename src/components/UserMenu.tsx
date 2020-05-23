import React, { MouseEvent } from 'react';
import { Box, Menu, IconButton, MenuItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { AccountCircle as AccountCircleIcon, AccountBalanceWallet as LogoutIcon } from '@material-ui/icons';
import { AuthState } from 'amplify-auth-redux-module';

const ITEM_HEIGHT = 60;

type Props = {
    user: AuthState['user'];
    loading: AuthState['loading'];
    signOut: () => void;
};

const UserMenu: React.FC<Props> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const handleClick = (event: MouseEvent): void => {
        setAnchorEl(event.currentTarget as HTMLButtonElement);
    };

    return (
        <Box mr={0} ml="auto" display="grid">
            <IconButton
                data-testid="openMenuButton"
                color="inherit"
                aria-label="More"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={(event: MouseEvent): void => handleClick(event)}
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                data-testid="long-menu"
                anchorEl={anchorEl}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: 200,
                    },
                }}
            >
                <MenuItem data-testid="signoutMenuItem" onClick={props.signOut}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Sign Out</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default UserMenu;
