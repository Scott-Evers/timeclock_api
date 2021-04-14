declare class Task {
    constructor(uuid?: string, id?: string, name?: string, requiresComment?: boolean);
    Uuid: string;
    Id: string;
    Name: string;
    RequiresComment: boolean;
}
export default Task;
