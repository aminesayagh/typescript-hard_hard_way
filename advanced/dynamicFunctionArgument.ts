export type Event = 
    | {
        type: 'LOG_IN',
        payload: {
            username: string;
            password: string;
        }
    } | {
        type: 'LOG_OUT',
    };

const sendEvent = <Type extends Event['type']>(
    ...args : Extract<Event, { type: Type }> extends { payload: infer TPayload } ? [type: Type, payload: TPayload] : [type: Type]
) => {}

sendEvent('LOG_IN', { username: 'foo', password: 'bar' });
sendEvent('LOG_OUT');