import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {HeaderMock} from "../../mocks/header.mocks";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import { RxjsService } from '../../services/rxjs.service';

export const errorMessages: any = {
  user_name_invalid: 'Nome de usuário muito curto.',
  user_name_required: 'Nome de usuário obrigatório.',
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
  private count = 0;

  contentMock = HeaderMock;
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  @Output() newCardCreated = new EventEmitter<string>();

  constructor(
    private router: Router,
    private auth: AuthService,
    private rxjsSv: RxjsService
  ) { }

  ngOnInit(): void {
  }

  addCard() {
    this.count++;
    const newCard = {
      icon: 'person',
      description: `Meu novo card dinamico ${this.count}`
    };
    this.rxjsSv.cardsSubject.next([newCard]);
    this.newCardCreated.emit('Novo card');
  }

  async navTo(redirectRoute: string) {
    console.log(redirectRoute);
    await this.router.navigateByUrl(redirectRoute);
  }

  async login($event: MouseEvent) {
    if (this.loginForm.valid){
      await this.auth.login(this.loginForm.value);
      await this.router.navigateByUrl('bem-vindo');
    } else {
      $event.stopPropagation();
    }
  }
}
