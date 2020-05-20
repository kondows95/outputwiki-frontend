import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../CustomerEdit';
import { getDummyAppState, getDummyCustomerState } from '../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.loading).toBe(false);
    expect(props.customers).toEqual(getDummyCustomerState().rows);
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(1);
    expect(Object.keys(props).includes('register')).toBeTruthy();
});
