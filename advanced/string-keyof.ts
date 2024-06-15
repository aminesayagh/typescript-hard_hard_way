export type Letters = 'a' | 'b' | 'c';

type RemoveC<TType> = TType extends `c` ? never : TType;

type RemplaceC<TType, TReplace> = TType extends `c` ? TReplace : TType;

export type WowWithoutC = RemoveC<Letters>; // expected to be 'a' | 'b'

export type WowWithZ = RemplaceC<Letters, 'z'>; // expected to be 'a' | 'b' | 'z'