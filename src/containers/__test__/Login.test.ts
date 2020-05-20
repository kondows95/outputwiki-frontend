import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../Login';
import { getDummyAppState } from '../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.authState).toBe('signIn');
});

it('mapDispatchToProps', async () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(2);
    expect(Object.keys(props).includes('signOut')).toBeTruthy();
    expect(Object.keys(props).includes('changeAuthState')).toBeTruthy();
});
