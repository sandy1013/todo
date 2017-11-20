export interface TodoModel {
    title: string;
    description: string,
    createdAt: Date,
    _id: number
}

export interface TodoSaveModel {
    title: string;
    description: string;
    createdAt: Date;
}

export class Todo implements TodoModel {
    public createdAt: Date;
    public _id: number;

    constructor(public title: string, public description: string) {
        this.createdAt = new Date();
        this._id = (new Date).valueOf();
    }
}