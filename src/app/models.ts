export interface Game {
    background_image: string;
    metacritic: number;
    id: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
    description: string;
}

export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
    name: string;
}

interface Publishers {
    name: string;
}

interface Rating {
    id: number;
    count: number;
    title: string;
}

interface Screenshots {
    image: string;
}

interface Trailer {
    data: {
        max: string;
    }
}  

interface ParentPlatform {
    platform: {
        id: number,
        name: string,
        slug: string
    }
}


