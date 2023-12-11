import { create } from "zustand";

type TAppStore = {
    username: string;
    accessToken: string;
    expiresIn: number;
    isLogged: boolean;
    logOut: () => void;
    logIn: (username: string, accessToken: string, expiresIn: number) => void;
}

export const useAppStore = create<TAppStore>()(set => ({
    username: '',
    accessToken: '',
    expiresIn: -1,
    isLogged: false,
    logOut: () => set(_ => ({ username: '', isLogged: false, accessToken: '', expiresIn: -1 })),
    logIn: (username, accessToken, expiresIn) => set(_ => ({ username, accessToken, expiresIn, isLogged:  true }))
}));