import { PATH } from "../config/webPath";
import Home from "../container/Home";
import ShowTodo from "../container/ShowTodo";
import WriteTodo from "../container/WriteTodo";

export const routes=[
    {exact : true , path : PATH.HOME , component: Home},
    {exact : true , path : PATH.INPUTTODO , component: WriteTodo},
    {exact : true , path : PATH.SHOWTODO , component: ShowTodo}
]
