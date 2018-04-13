import { Usuarios } from './usuarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  // agregar contactos
  nuevoContacto(usuarios: Usuarios): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let url = 'http://localhost/alkikarapirest/usuariosrest.php//usuario';
  return this.http.post(url, usuarios);
  }

  // listar contactos
  getUsuarios(): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/usuariosrest.php//usuarios';
    return this.http.get(url);
  }

  // modificar usuario
  modificarUsuario(usuario: Usuarios): Observable<any> {
    // http://localhost/alkikarapirest/usuariosrest.php/usuario/2
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost/alkikarapirest/usuariosrest.php//usuario/' + usuario.id_usuario;
    return this.http.put(url, usuario);
  }

  // eliminar usuario
  deleteUsuario(id: string): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let url = 'http://localhost/alkikarapirest/usuariosrest.php//usuario/' + id;
  return this.http.delete(url);
  }
}
