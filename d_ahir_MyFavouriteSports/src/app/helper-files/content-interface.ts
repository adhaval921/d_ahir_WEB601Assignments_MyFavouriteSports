export interface Content {
    readonly id: number;
    title: string;
    description: string;
    creator: string;
    type?: string;
    imgURL: string;
    tags?: string[];
}
