import '@testing-library/jest-dom/extend-expect';
import { mapStateToProps, mapDispatchToProps } from '../ContractList';
import { getDummyAppState } from '../../testData';

it('mapStateToProps', () => {
    const props = mapStateToProps(getDummyAppState());
    expect(props.filterValue).toBe('');
});

it('mapDispatchToProps', () => {
    const props = mapDispatchToProps(jest.fn());
    expect(Object.keys(props).length).toBe(3);
    expect(Object.keys(props).includes('setFilterValue')).toBeTruthy();
    expect(Object.keys(props).includes('setCurrentPage')).toBeTruthy();
    expect(Object.keys(props).includes('setFilterService')).toBeTruthy();
});
