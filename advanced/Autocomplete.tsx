
type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type IconSize = LooseAutocomplete<'sm' | 'xs' | 'lg'>;

interface IconProps {
    size: IconSize;
}

export const Icon = ({ size }: IconProps) => {
    return <div>Icon with size {size}</div>;
};

export const Autocomplete = () => {
    return (
        <>
            <Icon size="sm" />
            <Icon size="xs" />
            <Icon size="lg" />
        </>
    )
}