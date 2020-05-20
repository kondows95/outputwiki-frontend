import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../ContractTable';
import {
    getDummyAppState,
    getDummyContractState,
    getDummyJoinedContractList,
    getDummyCustomerList,
    getDummyServiceList,
} from '../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState()); //2customers-4contracts
    expect(props.loading).toBe(false);
    expect(props.currentPage).toEqual(getDummyContractState().currentPage);
    expect(props.rowsPerPage).toEqual(getDummyContractState().rowsPerPage);
    expect(props.joinedContracts).toEqual(getDummyJoinedContractList(2));
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(3);
    expect(Object.keys(props).includes('setCurrentPage')).toBeTruthy();
    expect(Object.keys(props).includes('setRowsPerPage')).toBeTruthy();
    expect(Object.keys(props).includes('clearCustomerError')).toBeTruthy();
});

it('mapStateToProps filterValue', () => {
    const state1 = getDummyAppState();
    const state2 = getDummyAppState();

    //set filterValue
    state1.contract.filterValue = '';
    state2.contract.filterValue = 'abcdefghitk';

    const props1 = mapStateToProps(state1);
    const props2 = mapStateToProps(state2);

    expect(props1.joinedContracts.length).toEqual(4); //customers[2] x contracts[2]
    expect(props2.joinedContracts.length).toEqual(0);
});

it('mapStateToProps Customer without contract', () => {
    const state = getDummyAppState();

    state.customer.rows = getDummyCustomerList(1);
    state.customer.rows[0].Contracts = [];

    const props1 = mapStateToProps(state);
    expect(props1.joinedContracts.length).toEqual(0);
});

it('mapStateToProps Customer without services', () => {
    const state = getDummyAppState();

    state.service.rows = getDummyServiceList(1);
    state.service.rows = [];
    const props1 = mapStateToProps(state);
    expect(props1.joinedContracts.length).toEqual(0);
});
it('mapStateToProps Customer with Unequal serviceId', () => {
    const state = getDummyAppState();

    state.service.rows = getDummyServiceList(1);
    state.service.rows[0].Id = 'dummyService_2';
    const props1 = mapStateToProps(state);
    expect(props1.joinedContracts.length).toEqual(0);
});
