export const getDeepValue = <Object, FirstKey extends keyof Object, SecondKey extends keyof Object[FirstKey]> (
    object: Object,
    firstKey: FirstKey,
    secondKey: SecondKey
): Object[FirstKey][SecondKey] => {
    return object[firstKey][secondKey];
}


const obj = {
    foo: {
        a: true,
        b: 2
    },
    bar: {
        c: 'cool',
        d: 2
    }
}

const value = getDeepValue(obj, 'foo', 'b');