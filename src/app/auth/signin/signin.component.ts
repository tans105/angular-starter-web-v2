import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    errorMsg;
    model: any = {};

    constructor(private authSerivce: AuthService) {
    }

    ngOnInit() {
    }

    authenticate(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;

        if (!this.authSerivce.authenticate(email, password)) {
            this.errorMsg = "Password incorrect or User does not exists";
        }
    }
}
