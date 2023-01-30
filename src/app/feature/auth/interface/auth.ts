export interface Auth {
}

export interface LoginData {
    email: string,
    name: string,
    role: string,
    token: string
}

export interface LoginResponse{
    data:LoginData,
    message:string,
    statusCode:number
}