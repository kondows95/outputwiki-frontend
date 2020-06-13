//import axios from 'axios';
import { AnyAction } from 'redux';
//import Auth from '@aws-amplify/auth';

export const initialArticle: Article = {
    ID: '',
    Title: '',
    DocumentationID: '',
    ChapterID: '',
    Tags: [],
    ItemType: 'Article',
    CreatedAt: '',
    UpdatedAt: '',
};

export type ArticleState = {
    rows: Article[];
    loading: boolean;
    error: string;
    rowsPerPage: number;
    currentPage: number;
};

export const initialState: ArticleState = {
    rows: [],
    loading: false,
    error: '',
    rowsPerPage: 5,
    currentPage: 0,
};

//=============================================================================
//Reducers
//=============================================================================
const _getCommonState = (state: ArticleState): ArticleState => ({
    ...state,
    error: '',
    loading: false,
});

export default (state: ArticleState = initialState, action: AnyAction): ArticleState => {
    switch (action.type) {
        case 'ARTICLE_SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case 'ARTICLE_BEGIN_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'ARTICLE_FETCH_ROWS_SUCCESS':
            return {
                ..._getCommonState(state),
                rows: action.payload,
            };
        case 'ARTICLE_SET_ROWS_PER_PAGE':
            return {
                ...state,
                rowsPerPage: action.payload,
            };
        case 'ARTICLE_SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };
        default:
            return state;
    }
};

//=============================================================================
//Actions
//=============================================================================
export const fetchRowsSuccess = (rows: Article[]): Action => ({
    type: 'ARTICLE_FETCH_ROWS_SUCCESS',
    payload: rows,
});

export const beginLoading = (): Action => ({
    type: 'ARTICLE_BEGIN_LOADING',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setError = (err: any): Action => ({
    type: 'ARTICLE_SET_ERROR',
    payload: err.message || err,
});

export const setRowsPerPage = (value: number): Action => ({
    type: 'ARTICLE_SET_ROWS_PER_PAGE',
    payload: value,
});

export const setCurrentPage = (value: number): Action => ({
    type: 'ARTICLE_SET_CURRENT_PAGE',
    payload: value,
});

//=============================================================================
//Async Operations
//=============================================================================
export const fetchArticles = (id: string) => {
    return async (dispatch: AppDispatch): Promise<void> => {
        //const sess = await Auth.currentSession();
        dispatch(beginLoading());
        try {
            //await new Promise((r) => setTimeout(r, 3000));
            const dummyData: Article[] = [];
            for (let i = 0; i < 20; i++) {
                dummyData.push({
                    ID: id + 'ArticleID' + i,
                    Title: 'ArticleTitle' + i,
                    DocumentationID: 'dummy-DocumentationID',
                    ChapterID: 'dummy-ChapterID',
                    Tags: ['tag1', 'tag2'],
                    ItemType: 'Article',
                    CreatedAt: '2019-11-22T02:37:25Z',
                    UpdatedAt: '2019-11-22T02:37:25Z',
                });
            }
            console.log('module/fetchArticles', dummyData);
            dispatch(fetchRowsSuccess(dummyData));
        } catch (err) {
            console.log('err', err);
            dispatch(setError(err));
        }
    };
};
