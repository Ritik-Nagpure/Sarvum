
export interface controllerReturn {
    state?: string;
    status?: number;
    message?: string;
    payload?: object;
}

export interface servicesReturn {
    status?: number;
    error?: number;
    message?: string;
}

export interface payloadTodo {
    id?: number
    title: string;
    status: string;
    completed?: boolean;
}

export interface payloadUser {
    id?: number;
    name?: string;
    email?: string;
}
