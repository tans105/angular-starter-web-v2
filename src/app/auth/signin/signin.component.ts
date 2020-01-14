import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    errorMsg;

    constructor(private authSerivce: AuthService) {
    }

    ngOnInit() {
    }

    authenticate() {
        if (!this.authSerivce.authenticate()) {
            this.errorMsg = "Password incorrect or User does not exists";
        }
    }
}
