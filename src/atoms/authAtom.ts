import {atom} from "jotai";


export type User = {
    name: string | null;
    email: string | null ;
    token: string | null;
    userPic: string | null
}
const defaultValues = {
    name: null,
    email: null,
    token: null,
    userPic: null
}
export const authAtom = atom<User | null >(null)