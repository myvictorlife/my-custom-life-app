import { of } from 'rxjs';

export class HttpClientMock {
    public set(_: string, __: any): any {
        return of();
    }
    public get(_: string): any {
        return of({ data: 'mock'});
    }
}
