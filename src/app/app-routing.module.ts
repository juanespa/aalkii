import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent} from './usuarios/usuarios.component';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';

// carros disponibles
import { CarrosdispComponent } from './carrosdispo/carrosdisp/carrosdisp.component';
import { ModificarDisponibleComponent } from './carrosdispo/modificar-disponible/modificar-disponible.component';

// reservas

import { CarrreservadosComponent } from './carrosreserva/carrreservados/carrreservados.component';
import { ModificarreservaComponent } from './carrosreserva/modificarreserva/modificarreserva.component';

// vehiculos
import { VehiListarComponent } from './vehiculos/vehi-listar/vehi-listar.component';
import { ModificarVehiculoComponent } from './vehiculos/modificar-vehiculo/modificar-vehiculo.component';




const routes: Routes = [
  { path: 'prueba', component: PruebaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'nuevousuario', component: NuevoUsuarioComponent },
  {
    path:
      'modificarusuario/:id_usuario/:nombre/:email/:telefono/:estado_usuario/:ciudad/:password',
    component: ModificarUsuarioComponent
  },
  { path: '', component: HomeComponent },
  // carros disponibles
  { path: 'carrosdisponibles', component: CarrosdispComponent },
  {
    path: 'modificarcarrodispo/:id/:placa/:fechaini/:fechafin',
    component: ModificarDisponibleComponent
  },
  // reservas
  { path: 'carrosreservas', component: CarrreservadosComponent },
  {
    path:
      'modificarreservas/:id_reserva/:id_usuario/:fecha_reserva/:fecha_inicio/:fecha_fin/:placa/:metodo_pago/:poliza/:calificacion',
    component: ModificarreservaComponent
  },
  // vehiculos
  { path: 'vehiculoslistar', component: VehiListarComponent },
  {
    path:
      // tslint:disable-next-line:max-line-length
      'modificarvehiculo/:placa/:id_usuario/:id_marca/:id_ciudad/:modelo/:version/:puertas/:cilindraje/:transmision/:aa/:tipo_combustible/:estado',
    component: ModificarVehiculoComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
