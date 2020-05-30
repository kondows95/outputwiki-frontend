import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Box } from '@material-ui/core';
import { CognitoUser } from '@aws-amplify/auth';
import { Route, BrowserRouter } from 'react-router-dom';
import theme from '../theme';
import Login from '../containers/Login';
import Header from '../containers/Header';
//import ListTable from '../containers/ListTable';

export type StateProps = {
    user: CognitoUser | null;
    loading: boolean;
};

export type DispatchProps = {
    fetchAuthedUser: () => void;
};

const App: React.FC<StateProps & DispatchProps> = (props) => {
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
                    return (
                        <React.Fragment>
                            <Header />
                        </React.Fragment>
                    );
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
