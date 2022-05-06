export const USER_KEY = 'user';

export const getLocalUser = () => {
    const user: any = localStorage.getItem(USER_KEY);
    return JSON.parse(user);
}

export const setLocalUser = (user: any) => {
    return localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const deleteLocalUser = () => {
    return localStorage.removeItem(USER_KEY)
}