import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

declare global {
    type AppState = {
        auth: AuthState;
        menu: MenuState;
        documentation: DocumentationState;
        chapter: ChapterState;
    };

    type AppDispatch = ThunkDispatch<AppState, undefined, AnyAction>;

    type Action = {
        type: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    };

    type Chapter = {
        ID: string;
        DocumentationID: string;
        Title: string;
        Tags: string[]; //Master Data of other Tags
        ItemType: string;
        CreatedAt: string;
        UpdatedAt: string;
    };

    type Documentation = {
        ID: string;
        Title: string;
        URL: string;
        Description: string;
        DocumentationType: string; //document|book
        Author?: string;
        ItemType: string;
        CreatedAt: string;
        UpdatedAt: string;
    };

    type Article = {
        ID: string;
        Title: string;
        DocumentationID: string;
        ChapterID?: string;
        Tags: string[];
        ItemType: string;
        CreatedAt: string;
        UpdatedAt: string;
    };

    type MenuType = 'default' | 'chapters';
}
