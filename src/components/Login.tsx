import React from 'react';
import Box from '@material-ui/core/Box';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SignIn from '../containers/auth/SignIn';
import SignUp from '../containers/auth/SignUp';
import ConfirmSignUp from '../containers/auth/ConfirmSignUp';
import ForgotPassword from '../containers/auth/ForgotPassword';
import ForgotPasswordReset from '../containers/auth/ForgotPasswordReset';

type Props = {
    authState: string | null;
} & RouteComponentProps;

const Login: React.FC<Props> = ({ authState }) => {
    const contents = (
        <React.Fragment>
            <SignIn enableSignUp={true} />
            <SignUp />
            <ConfirmSignUp />
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
