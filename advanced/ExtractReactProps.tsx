import React from 'react';

const MyComponent = (props: { enabled: boolean }) => {
    return null;
}

type PropsFrom<T> = T extends React.FC<infer P> ? P : T extends React.ComponentClass<infer P> ? P : never;

export const props: PropsFrom<typeof MyComponent> = {
    enabled: true
};