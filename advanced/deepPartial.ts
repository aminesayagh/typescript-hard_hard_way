
type DeepPartial<Thing> = {
    [Key in keyof Thing]?: Thing[Key] extends object ? DeepPartial<Thing[Key]> : Thing[Key];
}

interface Post {
    id: string;
    comment: { value: string }[];
    meta: {
        name: string;
        description: string;
    }
}

const post: DeepPartial<Post> = {
    id: '1',
    meta: {
        name: 'Post',
    },
}