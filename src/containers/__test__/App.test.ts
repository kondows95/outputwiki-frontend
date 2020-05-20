import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../App';
import { getDummyAppState, getDummyAuthState } from '../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.authState).toBe('signIn');
    expect(props.user).toEqual(getDummyAuthState().user);
    expect(props.loading).toBe(false);
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(5);
    expect(Object.keys(props).includes('fetchAuthedUser')).toBeTruthy();
    expect(Object.keys(props).includes('refreshToken')).toBeTruthy();
    expect(Object.keys(props).includes('fetchCustomers')).toBeTruthy();
    expect(Object.keys(props).includes('fetchServices')).toBeTruthy();
    expect(Object.keys(props).includes('fetchSalesRepresentatives')).toBeTruthy();
});
