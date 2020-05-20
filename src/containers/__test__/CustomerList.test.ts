import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../CustomerList';
import { getDummyAppState, getDummyCustomerState } from '../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.filterValue).toBe(getDummyCustomerState().filterValue);
    expect(props.selectedStatuscode).toBe(null);
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(3);
    expect(Object.keys(props).includes('setFilterValue')).toBeTruthy();
    expect(Object.keys(props).includes('setSelectedStatuscode')).toBeTruthy();
    expect(Object.keys(props).includes('setCurrentPage')).toBeTruthy();
});
