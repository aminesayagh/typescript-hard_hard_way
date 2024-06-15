interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

type AnimalText<T extends Animal> = `Animal Name ${T['name']}`;
type HumanText<T extends Human> = `Mr. ${T['firstName']} ${T['lastName']}`;

type AnimalOrHuman<T extends Animal | Human> = T extends Animal ? AnimalText<T> : T extends Human ? HumanText<T> : never;
export const getDisplayName = <T extends Animal | Human>(obj: T): AnimalOrHuman<T> => {
    if ('name' in obj) {
        obj as Animal;
        return `Animal Name ${obj.name}` as AnimalOrHuman<T>;
    }
    if ('firstName' in obj && 'lastName' in obj) {
        return `Mr. ${obj.firstName} ${obj.lastName}` as AnimalOrHuman<T>;
    }
    throw new Error('Invalid Object');
}