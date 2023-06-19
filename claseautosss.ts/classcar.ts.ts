class Auto {
  private Marca: string;
  private Modelo: string;
  private Potencia: string;
  private MaximaVelocidad: number;

  constructor(Marca: string, Modelo: string, Potencia: string, MaximaVelocidad: number) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Potencia = Potencia;
    this.MaximaVelocidad = MaximaVelocidad;
  }

  public ObtenerMarca(): string {
    return this.Marca;
  }

  public ObtenerModelo(): string {
    return this.Modelo;
  }

  public ObtenerPotencia(): string {
    return this.Potencia;
  }

  public ObtenerMaximaVelocidad(): number {
    return this.MaximaVelocidad;
  }

  public calcularTiempo(distancia: number): number {
    const tiempoOptimo = distancia / this.MaximaVelocidad;
    return tiempoOptimo;
  }
}

const autos: Auto[] = [
  new Auto("Marca 1", "Modelo 1", "Potencia 1", 200),
  new Auto("Marca 2", "Modelo 2", "Potencia 2", 250),
  new Auto("Marca 3", "Modelo 3", "Potencia 3", 180),
  new Auto("Marca 4", "Modelo 4", "Potencia 4", 220),
  new Auto("Marca 5", "Modelo 5", "Potencia 5", 190)
];

for (let i = 0; i < autos.length; i++) {
  console.log(`Auto ${i + 1}`);
  console.log(`Marca: ${autos[i].ObtenerMarca()}`);
  console.log(`Modelo: ${autos[i].ObtenerModelo()}`);
  console.log(`Potencia: ${autos[i].ObtenerPotencia()}`);
  console.log(`Velocidad Máxima: ${autos[i].ObtenerMaximaVelocidad()}`);

  const distancia = 250;
  const tiempoOptimo = autos[i].calcularTiempo(distancia);
  console.log(`Tiempo óptimo para recorrer ${distancia} km: ${tiempoOptimo.toFixed(2)} horas`);

  console.log("------------");
}