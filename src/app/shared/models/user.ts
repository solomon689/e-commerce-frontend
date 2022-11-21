export interface User {
    id?: string;
    name: string;
    lastname: string;
    email: string;
    role: {
        id?: string;
        name: string,
        code: string
    },
    addresses: {
            id: string,
            region: string,
            commune: string,
            street: string,
            streetNumber: number
    }[];
    purchases: Array<Object>,
    favorites: Array<Object>,
}