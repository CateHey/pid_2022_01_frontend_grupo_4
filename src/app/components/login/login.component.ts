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
    // this.usuarioService.login(this.usuario).subscribe(
    //   response => {
    //     console.log(response);
    //     if (response.mensaje == '') {
          this.router.navigate(['spring']);
    //     } else {
    //       alert(response.mensaje);
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

  validar(): boolean {
    let retorno: boolean = true;

    if (this.usuario.emailUsu === undefined || this.usuario.emailUsu == null || this.usuario.emailUsu == '') {
      alert("Es requerido ingresar el Usuario");
      retorno = false;
    }

    if (this.usuario.passUsu === undefined || this.usuario.passUsu == null || this.usuario.passUsu == '') {
      alert("Es requerido ingresar la Contraseña");
      retorno = false;
    }

    return retorno;
  }
}