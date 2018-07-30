import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
 export class DataService{
    constructor(private http: HttpClient) {}

    loadData(_url : string) {
        return this.http.get(_url)
    }
 }