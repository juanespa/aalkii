import { Usuarios } from './../usuarios';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuar: Usuarios;
  usu: any;
  a: any;
  constructor(public serviceUsu: UsuariosService) {}

  ngOnInit() {
    this.serviceUsu.getUsuarios().subscribe(resultado => {
      // this.usu = resultado.usuarios;
      this.usu = resultado.usuarios;
      this.usuar = this.usu;
      console.log(this.usu);
    });
  }

  eliminarUsuario(id: string) {
    if (confirm('Esta seguro que desea elimanar el usuario ' + id)) {
      this.serviceUsu.deleteUsuario(id).subscribe(respuesta => {
        respuesta = respuesta.usuarios;
        alert('Usuario Eliminado');
        this.serviceUsu
          .getUsuarios()
          .subscribe(respuest => (this.usuar = respuest.usuarios));
      });
    }
  }
}
