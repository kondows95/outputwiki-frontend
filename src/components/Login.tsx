import React from 'react';
import Box from '@material-ui/core/Box';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SignIn from '../containers/SignIn';
import ForgotPassword from '../containers/ForgotPassword';
import ForgotPasswordReset from '../containers/ForgotPasswordReset';

type Props = {
    authState: string | null;
} & RouteComponentProps;

const Login: React.FC<Props> = ({ authState }) => {
    const contents = (
        <React.Fragment>
            <SignIn />
            <ForgotPassword />
            <ForgotPasswordReset />
        </React.Fragment>
    );
    return (
        <Box flexGrow={1} textAlign="center">
            {authState ? contents : null}
        </Box>
    );
};
export default withRouter(Login);
