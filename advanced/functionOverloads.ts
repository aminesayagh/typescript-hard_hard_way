export function compose <Input, FirstArg>(
    func1: (arg: Input) => FirstArg
): (arg: Input) => FirstArg;

export function compose <Input, FirstArg, SecondArg>(
    func1: (arg: Input) => FirstArg,
    func2: (arg: FirstArg) => SecondArg
): (arg: Input) => SecondArg;

export function compose <Input, FirstArg, SecondArg, ThirdArg>(
    func1: (arg: Input) => FirstArg,
    func2: (arg: FirstArg) => SecondArg,
    func3: (arg: SecondArg) => ThirdArg
): (arg: Input) => ThirdArg;

export function compose(...args: any[]) {
    return {} as any;
}

const addOne = (x: number) => x + 1;

const numToString = (x: number) => x.toString();    

const stringToNum = (x: string) => parseInt(x, 10);

const addOneToString = compose(addOne, numToString, stringToNum);