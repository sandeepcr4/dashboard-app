import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routes';

@NgModule({
    imports: [
        CommonModule,
        loginRouting
    ],
    declarations: [
        LoginComponent
    ],
    exports: [
        LoginComponent
    ]
})

export class LoginModule {};