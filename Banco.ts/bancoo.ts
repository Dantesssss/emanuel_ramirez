class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public asignarFondos(monto: number): void {
        this.saldo += monto;
    }

    public sacarFondos(monto: number): void {
        if (monto <= this.saldo) {
            this.saldo -= monto;
        } else {
            console.log("No hay suficientes fondos disponibles.");
        }
    }

    public obtenerSaldo(): number {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria(78000);
console.log("Saldo inicial:", cuenta.obtenerSaldo());

cuenta.asignarFondos(6850);
console.log("Saldo después de asignar fondos:", cuenta.obtenerSaldo());

cuenta.sacarFondos(3000);
console.log("Saldo después de sacar fondos:", cuenta.obtenerSaldo()); 

cuenta.sacarFondos(1000); 
console.log("Saldo final:", cuenta.obtenerSaldo()); 