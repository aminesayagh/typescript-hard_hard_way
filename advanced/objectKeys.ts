export const myObject = {
    a: 1,
    b: 2,
    c: 3
};

const objectKeys = <O extends {}>(obj: O): (keyof O)[] => {
    return Object.keys(obj) as (keyof O)[];
} 

objectKeys(myObject).forEach(key => {
    console.log(myObject[key]);
});