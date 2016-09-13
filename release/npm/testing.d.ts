import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { StateUpdate, StateUpdates } from './state-updates';
export declare class MockStateUpdates extends ReplaySubject<StateUpdate<any>> {
    constructor();
    send(state: any, action: Action): void;
    sendAction(action: Action): void;
    sendState(state: any): void;
    whenAction(...actionTypes: string[]): Observable<StateUpdate<any>>;
}
export declare const MOCK_EFFECTS_PROVIDERS: ({
    provide: typeof MockStateUpdates;
    useClass: typeof MockStateUpdates;
} | {
    provide: typeof StateUpdates;
    useExisting: typeof MockStateUpdates;
})[];
