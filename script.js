class ServicioError extends Error {
  constructor(mensaje) {
    super(mensaje);
    this.name = "ServicioError";
  }
}