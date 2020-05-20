import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../ContractEdit';
import {
    getDummyAppState,
    getDummyJoinedContractList,
    getDummyCustomerState,
    getDummyServiceState,
    getDummySalesRepresentativeState,
} from '../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.loading).toBe(false);
    expect(props.joinedContracts).toEqual(getDummyJoinedContractList(2));
    expect(props.customers).toEqual(getDummyCustomerState().rows);
    expect(props.services).toEqual(getDummyServiceState().rows);
    expect(props.salesRepresentatives).toEqual(getDummySalesRepresentativeState().rows);
    expect(props.error).toEqual(getDummyCustomerState().error);
});

it('mapDispatchProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(2);
    expect(Object.keys(props).includes('register')).toBeTruthy();
    expect(Object.keys(props).includes('clearCustomerError')).toBeTruthy();
});
