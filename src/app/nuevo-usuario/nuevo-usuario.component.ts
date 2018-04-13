import { Usuarios } from './../usuarios';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

   id_usuario: any;
   nombre: string;
   email: string;
   telefono: string;
   estado_usuario: any; // estadoUsuario
   ciudad: string;
   password: string;

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  ngOnInit() {
  }

  nuevoUsuario() {
    // tslint:disable-next-line:prefer-const
    let usua: Usuarios = new Usuarios(this.id_usuario, this.nombre, this.email, this.telefono,
    this.estado_usuario, this.ciudad, this.password);
    this.usuarioService.nuevoContacto(usua)
    .subscribe(result => {
      alert(result.message);
      this.router.navigate(['/usuarios']);
    });
  }

}
