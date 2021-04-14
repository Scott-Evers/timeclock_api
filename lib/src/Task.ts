class Task {
  constructor(uuid?: string, id?: string, name?: string, requiresComment?: boolean) {
    this.Uuid = uuid ? uuid : '';
    this.Id = id ? id : '';
    this.Name = name ? name : '';
    this.RequiresComment = requiresComment ? requiresComment : true;
  }
  Uuid: string;
  Id: string;
  Name: string;
  RequiresComment: boolean;
}

export default Task;