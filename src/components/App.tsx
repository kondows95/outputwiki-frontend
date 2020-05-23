import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Box } from '@material-ui/core';
import theme from '../theme';
import Login from '../containers/Login';
import Header from '../containers/Header';
import { CognitoUser } from '@aws-amplify/auth';
import { Route, BrowserRouter } from 'react-router-dom';

export type StateProps = {
    user: CognitoUser | null;
};

export type DispatchProps = {
    fetchAuthedUser: () => void;
};

type Props = {
    user: CognitoUser | null;
    fetchAuthedUser: () => void;
};

const App: React.FC<Props> = (props) => {
    const isFirstRef = React.useRef(true);
    React.useEffect(() => {
        //Call fetchAuthedUser only for the first time.
        if (isFirstRef.current) {
            isFirstRef.current = false;
            props.fetchAuthedUser();
        }
    });

    const contents = (
        <Box display="flex">
            <Route
                exact
                path="/"
                render={(): React.ReactElement => {
                    return <Header />;
                }}
            />
        </Box>
    );
    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                {props.user ? contents : <Login />}
            </BrowserRouter>
        </MuiThemeProvider>
    );
};

export default App;
