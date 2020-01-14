import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthService} from "./auth/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn = false;
    userLoggedIn: Subscription;

    constructor(private auth: AuthService) {
        this.userLoggedIn = this.auth.userLoggedIn.subscribe(
            (userLoggedIn) => {
                console.log("Here");
                this.isLoggedIn = userLoggedIn
            }
        )
    }


}
