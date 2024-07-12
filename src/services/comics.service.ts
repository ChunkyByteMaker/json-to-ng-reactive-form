import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Comics } from "../models/ComicsModel";

@Injectable()
export class ComicsService {
    constructor(private httpClient: HttpClient) { }

    getComics(): Observable<Comics[]> {
        return this.httpClient.get<Comics[]>('/assets/jsons/comics-i-like.json');
    }
}