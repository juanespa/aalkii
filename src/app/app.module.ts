import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CardisponibleService } from './cardisponible.service';
import { NabvarComponent } from './nabvar/nabvar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './usuarios.service';
import { ModificarUsuarioComponent } from './modificar-usuario/modificar-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { CarrosdispComponent } from './carrosdispo/carrosdisp/carrosdisp.component';
import { ModificarDisponibleComponent } from './carrosdispo/modificar-disponible/modificar-disponible.component';
import { ReservasService } from './reservas.service';
import { CarrreservadosComponent } from './carrosreserva/carrreservados/carrreservados.component';
import { ModificarreservaComponent } from './carrosreserva/modificarreserva/modificarreserva.component';
import { VehiListarComponent } from './vehiculos/vehi-listar/vehi-listar.component';
import { VehiculosService } from './vehiculos.service';
import { ModificarVehiculoComponent } from './vehiculos/modificar-vehiculo/modificar-vehiculo.component';



@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    NabvarComponent,
    HomeComponent,
    FooterComponent,
    UsuariosComponent,
    ModificarUsuarioComponent,
    NuevoUsuarioComponent,
    CarrosdispComponent,
    ModificarDisponibleComponent,
    CarrreservadosComponent,
    ModificarreservaComponent,
    VehiListarComponent,
    ModificarVehiculoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CardisponibleService, UsuariosService, ReservasService, VehiculosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
