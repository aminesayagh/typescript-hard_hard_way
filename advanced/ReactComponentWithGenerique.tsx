interface TableProps<T extends { id: string }> {
    items: T[],
    renderItems: (item: T) => React.ReactNode;
}

export const Table = <T extends { id: string }>(props: TableProps<T>) => {
    return null;
}

export const Component = () => {
    return (
        <Table<{
            id: number;
        }>
            items={[{ id: '1' }, { id: '2' }]}
            renderItems={(item) => <div key={item.id}>{item.id}</div>}
        />
    )
}