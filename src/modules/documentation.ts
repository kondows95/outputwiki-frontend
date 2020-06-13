//import axios from 'axios';
import { AnyAction } from 'redux';
//import Auth from '@aws-amplify/auth';

const DEFAULT_DOCUMENTATION_TYPE = 'document';

export const initialDocumentation: Documentation = {
    ID: '',
    Title: '',
    URL: '',
    Description: '',
    DocumentationType: '',
    Author: '',
    NumArticles: 0,
    ItemType: '',
    CreatedAt: '',
    UpdatedAt: '',
};

export type DocumentationState = {
    map: Map<string, Documentation>;
    loading: boolean;
    error: string;
};

export const initialState: DocumentationState = {
    map: new Map<string, Documentation>(),
    loading: false,
    error: '',
};

//=============================================================================
//Reducers
//=============================================================================
const _getCommonState = (state: DocumentationState): DocumentationState => ({
    ...state,
    error: '',
    loading: false,
});

export default (state: DocumentationState = initialState, action: AnyAction): DocumentationState => {
    switch (action.type) {
        case 'DOCUMENTATION_SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case 'DOCUMENTATION_BEGIN_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'DOCUMENTATION_FETCH_MAP_SUCCESS':
            return {
                ..._getCommonState(state),
                map: action.payload,
            };
        default:
            return state;
    }
};

//=============================================================================
//Actions
//=============================================================================
export const fetchMapSuccess = (data: Map<string, Documentation[]>): Action => ({
    type: 'DOCUMENTATION_FETCH_MAP_SUCCESS',
    payload: data,
});

export const beginLoading = (): Action => ({
    type: 'DOCUMENTATION_BEGIN_LOADING',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setError = (err: any): Action => ({
    type: 'DOCUMENTATION_SET_ERROR',
    payload: err.message || err,
});

//=============================================================================
//Async Operations
//=============================================================================
const mapByDocumentationType = (rows: Documentation[]): Map<string, Documentation[]> => {
    const result = new Map<string, Documentation[]>();
    for (const row of rows) {
        const key = row['DocumentationType'] || DEFAULT_DOCUMENTATION_TYPE;
        let values = result.get(key);
        if (!values) {
            values = [];
            result.set(key, values);
        }
        values.push(row);
    }
    return result;
};

export const fetchDocumentations = () => {
    return async (dispatch: AppDispatch): Promise<void> => {
        //const sess = await Auth.currentSession();
        dispatch(beginLoading());
        try {
            //await new Promise((r) => setTimeout(r, 3000));
            const dummyData: Documentation[] = [];
            for (let i = 0; i < 20; i++) {
                const docType = i % 2 === 0 ? 'book' : 'document';
                dummyData.push({
                    ID: 'docID' + i,
                    Title: docType + i,
                    URL: 'http://example.jp',
                    Description: 'dummy-description',
                    DocumentationType: docType,
                    Author: 'dummy-author',
                    NumArticles: i % 3,
                    ItemType: 'Documentation',
                    CreatedAt: '2019-11-22T02:37:25Z',
                    UpdatedAt: '2019-11-22T02:37:25Z',
                });
            }
            const data = mapByDocumentationType(dummyData);
            dispatch(fetchMapSuccess(data));
        } catch (err) {
            console.log('err', err);
            dispatch(setError(err));
        }
    };
};
