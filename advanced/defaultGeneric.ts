

export type Obj = {
    a: 'Foo',
    a2: 'Bar',
    a3: 'a3',
    b: 'Baz',
}

type ValuesOfKeysStartingWithA<Obj, _ExtractKeys = Extract<keyof Obj, `a${number}`>> = {
    [K in Extract<keyof Obj, `a${number}`>]: Obj[K];
}[Extract<keyof Obj, `a${number}`>];

const obj: ValuesOfKeysStartingWithA<Obj> = {
    a3: 'a3',
    a2: 'Bar',
}