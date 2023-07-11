export type User<T extends string> = {
    id?: number,
    username?: string,
    name?: string,
    email?: string,
    role: T,
    firstName: string,
    lastName: string,
    avatar: string,
}