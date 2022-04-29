import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  login() {
    if (!this.validar()) {
      return;
    }
    this.usuarioService.login(this.usuario).subscribe(
      response => {
        console.log(response);
        if (response.mensaje == '') {
          sessionStorage.setItem('usuarioActual', JSON.stringify(response.usuario));
          this.router.navigate(['spring']);
        } else {
          alert(response.mensaje);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  validar(): boolean {
    let retorno: boolean = true;

    if (this.usuario.email_usu === undefined || this.usuario.email_usu == null || this.usuario.email_usu == '') {
      alert("Es requerido ingresar el Usuario");
      retorno = false;
    }

    if (this.usuario.pass_usu === undefined || this.usuario.pass_usu == null || this.usuario.pass_usu == '') {
      alert("Es requerido ingresar la Contraseña");
      retorno = false;
    }

    return retorno;
  }
}