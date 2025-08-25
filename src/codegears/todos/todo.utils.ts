import { payloadTodo } from "../../utils/interfaces.js";

export const todoIdGenrator = (): number => {
    const currdate = Date.now();
    return currdate;
}

