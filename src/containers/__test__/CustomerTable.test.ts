import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../CustomerTable';
import { getDummyAppState, getDummyCustomerState } from '../../testData';

it('mapStateToProps', () => {
    //test initial
    const props = mapStateToProps(getDummyAppState());
    expect(props.loading).toBe(false);
    expect(props.customers).toEqual(getDummyCustomerState().rows);
    expect(props.currentPage).toEqual(getDummyCustomerState().currentPage);
    expect(props.rowsPerPage).toEqual(getDummyCustomerState().rowsPerPage);
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(2);
    expect(Object.keys(props).includes('setCurrentPage')).toBeTruthy();
    expect(Object.keys(props).includes('setRowsPerPage')).toBeTruthy();
});

it('mapStateToProps filterValue', () => {
    const state1 = getDummyAppState();
    const state2 = getDummyAppState();

    //set filterValue
    state1.customer.filterValue = '';
    state2.customer.filterValue = 'abcedfghijklmn';

    const props1 = mapStateToProps(state1);
    const props2 = mapStateToProps(state2);

    expect(props1.customers.length).toEqual(2);
    expect(props2.customers.length).toEqual(0);
});

it('mapStateToProps selectedStatusCode', () => {
    const state1 = getDummyAppState();
    const state2 = getDummyAppState();

    //set selectedStatusCode.
    // const state = getDummyAppState();
    state1.customer.selectedStatuscode = null;
    state2.customer.selectedStatuscode = 0;

    const props1 = mapStateToProps(state1);
    const props2 = mapStateToProps(state2);

    expect(props1.customers.length).toEqual(2);
    expect(props2.customers.length).toEqual(0);
});
