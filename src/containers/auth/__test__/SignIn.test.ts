import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../SignIn';
import { getDummyAppState, getDummyAuthState } from '../../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.authState).toBe('signIn');
    expect(props.loading).toBe(false);
    expect(props.error).toBe(getDummyAuthState().error);
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(2);
    expect(Object.keys(props).includes('changeAuthState')).toBeTruthy();
    expect(Object.keys(props).includes('signIn')).toBeTruthy();
});
