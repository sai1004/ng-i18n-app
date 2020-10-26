import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    get(url: string, data: any, loader?: boolean) {
        return this.http.get(url);
    }
    post(url: string, data: any, loader?: boolean) {
        return this.http.post(url, data);
    }
    put(url: string, data: any, loader?: boolean) {
        return this.http.put(url, data);
    }
    delete(url: string, data: any, loader?: boolean) {
        return this.http.delete(url);
    }
}
