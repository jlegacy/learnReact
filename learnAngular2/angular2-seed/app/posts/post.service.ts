import {Http,HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export class PostService {
    constructor (private _http: Http) {}
    getPosts(url) {
        return this._http.get(url).map(res => res.json())
    }
}