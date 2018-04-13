export class Reservas {
         constructor(
           public id_reserva: any,
           public id_usuario: any,
           public fecha_reserva: string,
           public fecha_inicio: string,
           public fecha_fin: string,
           public placa: string,
           public metodo_pago: any,
           public poliza: any,
           public calificacion_servicio: any
        ) {}
       }
