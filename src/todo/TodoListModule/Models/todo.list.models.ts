export interface TodoModel {
    title: string;
    description: string;
    createdAt: string;
    _id: string;
}

export interface TodoSaveModel {
    title: string;
    description: string;
    createdAt: string;
}

export class Todo implements TodoModel {
    public createdAt: string;
    public _id: string;

    constructor(public title: string, public description: string) {
        this.createdAt = (new Date).toString();
        this._id = (new Date).valueOf().toString();
    }
}
