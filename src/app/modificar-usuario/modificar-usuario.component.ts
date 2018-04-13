import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {
  id_usuario: number;
  nombre: string;
  email: string;
  telefono: string;
  estado_usuario: number;
  ciudad: string;
  password: string;

  constructor(private router: Router, private route: ActivatedRoute, private usuarioService:
     UsuariosService) {}

  ngOnInit() {
    this.id_usuario = +this.route.snapshot.paramMap.get('id_usuario');
    this.nombre = this.route.snapshot.paramMap.get('nombre');
    this.email = this.route.snapshot.paramMap.get('email');
    this.telefono = this.route.snapshot.paramMap.get('telefono');
    this.estado_usuario = +this.route.snapshot.paramMap.get('estado_usuario');
    this.ciudad = this.route.snapshot.paramMap.get('ciudad');
    this.password = this.route.snapshot.paramMap.get('password');
  }

  modificarUsuario() {
    // tslint:disable-next-line:prefer-const
    let usu: Usuarios = new Usuarios(this.id_usuario, this.nombre, this.email, this.telefono,
       this.estado_usuario, this.ciudad, this.password);
       this.usuarioService.modificarUsuario(usu)
       .subscribe(result => {
         alert(result.message);
         this.router.navigate(['/usuarios']);
       });
  }
}
