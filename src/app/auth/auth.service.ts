import {Injectable} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userLoggedIn = new Subject<boolean>();

    constructor() {
    }

    authenticate() {
        this.userLoggedIn.next(true);
        return true;
    }
}
