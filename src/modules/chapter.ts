//import axios from 'axios';
import { AnyAction } from 'redux';
//import Auth from '@aws-amplify/auth';

export const initialChapter: Chapter = {
    ID: '',
    DocumentationID: '',
    Title: '',
    Tags: [],
    NumArticles: 0,
    ItemType: '',
    CreatedAt: '',
    UpdatedAt: '',
};

export type ChapterState = {
    rows: Chapter[];
    loading: boolean;
    error: string;
};

export const initialState: ChapterState = {
    rows: [],
    loading: false,
    error: '',
};

//=============================================================================
//Reducers
//=============================================================================
const _getCommonState = (state: ChapterState): ChapterState => ({
    ...state,
    error: '',
    loading: false,
});

export default (state: ChapterState = initialState, action: AnyAction): ChapterState => {
    switch (action.type) {
        case 'CHAPTER_SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case 'CHAPTER_BEGIN_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'CHAPTER_FETCH_SUCCESS':
            return {
                ..._getCommonState(state),
                rows: action.payload,
            };
        default:
            return state;
    }
};

//=============================================================================
//Actions
//=============================================================================
export const fetchRowsSuccess = (rows: Chapter[]): Action => ({
    type: 'CHAPTER_FETCH_SUCCESS',
    payload: rows,
});

export const beginLoading = (): Action => ({
    type: 'CHAPTER_BEGIN_LOADING',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setError = (err: any): Action => ({
    type: 'CHAPTER_SET_ERROR',
    payload: err.message || err,
});

//=============================================================================
//Async Operations
//=============================================================================
const isAlreadLoaded = (docID: string, state: ChapterState): boolean => {
    if (state.rows.length > 0) {
        if (state.rows[0].DocumentationID === docID) {
            return true;
        }
    }
    return false;
};

export const fetchChapters = (docID: string) => {
    return async (dispatch: AppDispatch, getState: () => AppState): Promise<void> => {
        if (isAlreadLoaded(docID, getState().chapter)) {
            console.log('alreadLoaded');
            return;
        }

        //const sess = await Auth.currentSession();
        dispatch(beginLoading());
        try {
            //await new Promise((r) => setTimeout(r, 3000));
            const dummyData: Chapter[] = [];
            for (let i = 0; i < 20; i++) {
                dummyData.push({
                    ID: docID + '_chapter_' + i,
                    DocumentationID: docID,
                    Title: 'ChapterTitle' + i,
                    Tags: ['tag1', 'tag2s'],
                    NumArticles: i % 10,
                    ItemType: 'Chapter',
                    CreatedAt: '2019-11-22T02:37:25Z',
                    UpdatedAt: '2019-11-22T02:37:25Z',
                });
            }
            console.log('module/fetchChapters', dummyData);
            dispatch(fetchRowsSuccess(dummyData));
        } catch (err) {
            console.log('err', err);
            dispatch(setError(err));
        }
    };
};
