type CheckBadArgs<Arg> = Arg extends any[] ? 'Arrays are not supported' : Arg;

export const deepEqualCompare = <Arg>(a: CheckBadArgs<Arg>, b: CheckBadArgs<Arg>): boolean => {
    if (Array.isArray(a) || Array.isArray(b)) {
        throw new Error('Arrays are not supported');
    }
    return a === b as boolean;
}

deepEqualCompare(1, 1); // expected to be true
deepEqualCompare([], ['a']); // expected error