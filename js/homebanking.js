//Declaración de variables
var nombreUsuario = "mromero";
var saldoCuenta = 5000;
var limiteExtraccion = 1000;
var cuentaAmiga1 ="1234567"
var cuentaAmiga2="7654321"
var cuentaAmiga;
var servicioAgua = 350;
var servicioTelefono=425;
var servicioLuz=210;
var servicioInternet=570;
var servicioPagado;
var texto;
var codigoSeguridad=1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
function sumarDinero(parametro) {
    saldoCuenta = saldoCuenta+parametro;
}
function restarDinero(parametro) {
    saldoCuenta = saldoCuenta-parametro;
}
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var ingresarLimiteDeExtraccion = prompt("Ingrese nuevo límite de extracción");
    var montoLimiteExtraccion = parseInt(ingresarLimiteDeExtraccion);
    if (!esNumeroValido(montoLimiteExtraccion)){
        return;
    }else{
    limiteExtraccion=montoLimiteExtraccion;
    actualizarLimiteEnPantalla();
    return alert("Nuevo limite de extracción: $" + montoLimiteExtraccion)
}
}
function extraerDinero() {
    var ingresarmontoExtraer = prompt("¿Cuanto dinero desea extraer?");
    var montoExtraer= parseInt(ingresarmontoExtraer);
    if (!esNumeroValido(montoExtraer)){
        return;
    }else{
    var moduloCien = montoExtraer%100;
    if (montoExtraer<=saldoCuenta){
        if(montoExtraer<=limiteExtraccion){
            if(moduloCien==0){
    restarDinero(montoExtraer);
    var saldoAnterior = saldoCuenta+montoExtraer;
    actualizarSaldoEnPantalla();
    return alert("Has retirado: $"+montoExtraer +"\n Saldo anterior: $"+saldoAnterior+"\n Saldo actual: $"+ saldoCuenta);
}   else{
    return alert("Solo puedes extraer billetes de 100")
}
}   else{
    return alert("Monto a extraer supera limite");
}
}   else{
    return alert("No hay SALDO suficiente para extracción");
}
}
}
function depositarDinero() {
var ingresarmontoDepositar = prompt ("¿Cuanto dinero desea depositar?");
var montoDepositar= parseInt(ingresarmontoDepositar);
if (!esNumeroValido(montoDepositar)){
    return;
}else{
sumarDinero(montoDepositar);
var saldoAnterior = saldoCuenta-montoDepositar;
actualizarSaldoEnPantalla();
return alert("Has depositado: $"+montoDepositar +"\n Saldo anterior: $"+saldoAnterior+"\n Saldo actual: $"+ saldoCuenta); 
}
}

function pagarServicio() {
   var seleccionarServicio = prompt("Ingrese el número que corresponda con el servicio que queres pagar \n1-Agua \n2-Luz \n3-Internet \n4-Teléfono");
   var seleccionarServicioNum= parseInt(seleccionarServicio);
   
   switch (seleccionarServicioNum){
    case 1:
    servicioPagado =servicioAgua;
    texto=" Agua";
    break;
    case 2:
    servicioPagado=servicioLuz;
    texto=" Luz";
    break;
    case 3:
        servicioPagado=servicioInternet;
        texto=" Internet";
    break;
    case 4:
        servicioPagado=servicioTelefono;
        texto=" Teléfono"
    break;
    default:
        servicioPagado="no existe";
}
if (servicioPagado==="no existe"){
    return alert("Este servicio no existe")
}else{
if(saldoCuenta>=servicioPagado){
    restarDinero(servicioPagado);
    var saldoAnterior=saldoCuenta+servicioPagado;
    actualizarSaldoEnPantalla();
    return alert("Has pagado el servicio" + texto+" \n Saldo anterior: $"+saldoAnterior+"\n Dinero descontado: $"+servicioPagado +"\n Saldo actual: $"+ saldoCuenta);
}
else{
    return alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
    }
}
}

function transferirDinero() {
    var montoTransferir= prompt ("Ingrese el monto que desea transferir");
    var montoTransferirNum=parseInt(montoTransferir);
    if (!esNumeroValido(montoTransferirNum)){
        return;
    }else{
    if(montoTransferirNum>saldoCuenta){
        return alert("No puede transferir esa cantidad de dinero");
    }else{
        var ingresarCuenta=prompt("Ingrese número de cuenta donde desea transferir");
        var numeroCuentaTransferir=parseInt(ingresarCuenta);
        switch(numeroCuentaTransferir){
            case 1234567:
                cuentaAmiga=cuentaAmiga1;
            break;
            case 7654321:
                cuentaAmiga=cuentaAmiga2;
                break;
            default:
                cuentaAmiga="no existe"
        }
        if(cuentaAmiga==="no existe"){
            return alert("Solo puede transferirse dinero a una cuenta amiga")
        }else{
            restarDinero(montoTransferirNum);
            actualizarSaldoEnPantalla();
            return alert("Se han transferido $"+montoTransferirNum+"\n Cuenta destino: "+cuentaAmiga)
        }
        
    }
}
}

function iniciarSesion() {
    var ingresarCodigoSeguridad=prompt("Ingrese su codigo de seguridad para iniciar sesión");
    var numeroCodigoSeguridad= parseInt(ingresarCodigoSeguridad);
    var verificarCodigo= numeroCodigoSeguridad===codigoSeguridad;
    if(verificarCodigo){
        return alert ("Bienvenido/a Matias Romero ya puedes comenzar a realizar operaciones");
    }else{
        saldoCuenta=0;
        return alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
    }
}

//Funciones para re utilizar
function esNumeroValido(numero){
   if(isNaN(numero)){
    alert ("el número no es valido");
    return false;
   }
   return true;
}
//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}