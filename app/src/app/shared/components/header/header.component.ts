import { Component, OnInit } from '@angular/core';
import {HeaderMock} from "../../mocks/header.mocks";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export const errorMessages: any = {
  email_invalid: 'Formato de email inválido.',
  email_required: 'Email obrigatório.',
  password_invalid: 'Senha inválida',
  password_required: 'Insira a senha',
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  errorMessages = errorMessages;

  contentMock = HeaderMock;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor() { }

  ngOnInit(): void {
  }

  navTo(redirectRoute: string) {

  }
}
