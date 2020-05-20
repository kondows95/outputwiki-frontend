import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../Header';
import { getDummyAppState, getDummyAuthState } from '../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.authState).toBe('signIn');
    expect(props.user).toEqual(getDummyAuthState().user);
    expect(props.loading).toBe(false);
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(1);
    expect(Object.keys(props).includes('signOut')).toBeTruthy();
});
