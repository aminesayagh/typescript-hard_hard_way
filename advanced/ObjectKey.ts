
interface ApiData {
    "map:latitude": number;
    "map:longitude": number;
}

type RemoveMapsFromKeys<T> = {
    [K in keyof T as K extends `map:${infer T}` ? T : K]: T[K]
}

type CleanedApiData = RemoveMapsFromKeys<ApiData>;