(()=>{
    // referencias HTML
    const input = document.querySelector("input");
    const btnDepositar = document.querySelector(".depositar");
    const btnRetirar = document.querySelector(".retirar");
    const cambiarSaldo = document.querySelector(".cambioSaldo");
    const aviso = document.querySelector(".avisos");

    class CuentaBancaria {

        // propiedades / atributos
        titular;
        saldo;

        // constructor
        constructor(titular,saldo= 0){
            this.titular = titular;
            this.saldo = saldo;
        };

        // metodo depositar: siempre devuelve un mensaje (texto)
        depositar(montoDepositar){
            if (montoDepositar <= 0){
                return "No se permite esa cantidad";
            }
            this.saldo += montoDepositar;
            return "Depósito con éxito";
        }

        // metodo retirar: siempre devuelve un mensaje (texto)
        retirar(montoRetirar){
            if (montoRetirar <= 0){
                return "No se permite esa cantidad";
            }
            if (montoRetirar > this.saldo){
                return "Saldo insuficiente";
            }
            this.saldo -= montoRetirar;
            return "Retiro con éxito";
        }

        // tercer metodo pero no se muestra en el HTML o no se hace uso de el DOM
        verSaldo(){
            console.log(`${this.titular} tiene ${this.saldo}`);
        };

    }

    // instanciando la clase o objeto
    const prueba = new CuentaBancaria("samuel");

    // eventos: el mensaje va a avisos y el saldo se lee del objeto
    btnDepositar.addEventListener("click", () => {
        const monto = Number(input.value); // valor ingresado en el input
        const mensaje = prueba.depositar(monto);
        aviso.textContent = mensaje;
        cambiarSaldo.textContent = prueba.saldo;
    });


    btnRetirar.addEventListener("click", () => {
        const monto = Number(input.value); // valor ingresado en el input 

        const mensaje = prueba.retirar(monto);
        aviso.textContent = mensaje;
        cambiarSaldo.textContent = prueba.saldo;
    });
})();



