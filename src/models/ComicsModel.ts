import { IComics } from "../interfaces/IComics";

export class Comics implements IComics {
    id: number;
    title: string;
    description: string;
    characters: string[];

    constructor(data?: Partial<Comics>){
        Object.assign(this, data);
    }
}