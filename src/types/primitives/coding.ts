interface ICoding <C extends string = string> {
    system? : string,
    version? : string,
    code?: C | string,
    display? : string,
    userSelected? : boolean,
}

export type { ICoding };