export enum Evento {
  INICIO_SIMULACION,
  LLEGADA_PASAJERO,
  FIN_FACTURACION,
  FIN_VENTA_BILLETE,
  FIN_CHEQUEO_BILLETE,
  FIN_CONTROL_METALES,
  FIN_PASO_ENTRE_VENTA_Y_FACTURACION,
  FIN_PASO_ENTRE_FACTURACION_Y_CONTROL,
  FIN_PASO_ENTRE_CHEQUEO_Y_CONTROL,
  FIN_PASO_ENTRE_CONTROL_Y_EMBARQUE,
  FIN_SIMULACION
}