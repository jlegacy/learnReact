import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injectable} from 'angular2/core';


@Injectable()
export class UsersService {
    constructor(private _http: Http) { }
    getUsers(url) {
        return this._http.get(url).map(res => res.json())
    }
    postUser(url, data) {
        return this._http.post(url, JSON.stringify(data)).map(res => res.json())
    }
    putUser(url, data) {
        return this._http.put(url, JSON.stringify(data)).map(res => res.json())
    }
    deleteUser(url) {
        return this._http.delete(url).map(res => res.json())
    }
    getUser(url) {
        return this._http.get(url).map(res => res.json())
    }
    getPosts(url) {
        return this._http.get(url).map(res => res.json())
    }
    getPost(url) {
        return this._http.get(url).map(res => res.json())
    }
}