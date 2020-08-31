import { IApp, IBrowserUrlConfig, IDefaults, IOgApiConfig, ITemp } from '../src/globals/globals';

interface IElementObject {
    locateStrategy?: string;
    selector(...a: string[] | string): string;
}

export interface INightwatchPageObjects {
    elements: {
        [s: string]: string | IElementObject;
    };
    sections?: {
        [s: string]: string | { selector: string; elements?: { [string]: string } };
};
    commands: any;
    url?(): any;
}
declare module 'nightwatch' {
    // tslint:disable-next-line:interface-name
    interface NightwatchGlobals {
        app: IApp;
        browserUrl: IBrowserUrlConfig;
        defaults: IDefaults;
        ogApi: IOgApiConfig;
        temp: ITemp;
    }
}
