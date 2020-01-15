import {Injectable} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    userLoggedIn = new Subject<boolean>();

    constructor() {
    }

    authenticate(email, password) {
        //Call the http rest endpoint to validate User
        this.userLoggedIn.next(true);
        return true;
    }
}
