interface FormaGeometrica {
  calcularArea(): number;
  calcularPerimetro(): number;
}

class Rectangulo implements FormaGeometrica {
  constructor(private ancho: number, private altura: number) {}

  calcularArea(): number {
    return this.ancho * this.altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.ancho + this.altura);
  }
}

class Circulo implements FormaGeometrica {
  constructor(private radio: number) {}

  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }

  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

const rectangulo: FormaGeometrica = new Rectangulo(5, 10);
console.log("Área del rectángulo:", rectangulo.calcularArea());
console.log("Perímetro del rectángulo:", rectangulo.calcularPerimetro());

const circulo: FormaGeometrica = new Circulo(3);
console.log("Área del círculo:", circulo.calcularArea());
console.log("Perímetro del círculo:", circulo.calcularPerimetro());
