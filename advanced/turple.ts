function simpleState<T>(initial: T): [
    () => T,
    (v: T) => void
] {
    return [
        () => initial,
        (v: T) => {
            initial = v;
        }
    ];
}

const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
st1setter(20);