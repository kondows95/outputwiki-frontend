import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../ForgotPasswordSubmit';
import { getDummyAppState, getDummyAuthState } from '../../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.authState).toBe('signIn');
    expect(props.loading).toBe(false);
    expect(props.error).toBe(getDummyAuthState().error);
    expect(props.email).toBe(getDummyAuthState().email);
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(2);
    expect(Object.keys(props).includes('changeAuthState')).toBeTruthy();
    expect(Object.keys(props).includes('forgotPasswordSubmit')).toBeTruthy();
});
