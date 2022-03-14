let form = document.getElementById('formRegistro');

let contenidoM = document.getElementById("contenidoM");
let contenidoT = document.getElementById("contenidoT");
let contenidoN = document.getElementById("contenidoN");

let labelT = document.getElementById("lblT");
let labelN = document.getElementById("lblN");

let imageT = document.getElementById("imageT");
let imageN = document.getElementById("imageN");

let pathT = document.getElementById("imageT");
let pathN = document.getElementById("imageT");

let fecha = document.getElementById("iFecha");

let color = "";
let icon = "";
let imagen = "";
let alerta = "";
let texto ="";
let respuesta = "";
let html = "<label>{texto}<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='{clase}' viewBox='0 0 32 32'><path d='{ruta}'/></svg></label>"

let dia = new Date().getDate()
let mes = new Date().getMonth();
let anio = new Date().getFullYear();

var date = new Date(anio, mes, dia);
var currentDate = date.toISOString().substr(0, 10);
fecha.value = currentDate;

function generarNumero() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * (50 - 5 + 1) + 5));
        }, 5000);
    });
}

async function asyncClima(fecha) {
    const result = await generarNumero();
    texto  = "La mañana del " + fecha + " la temperadura será de " + result + " estará " + obtenerClima(result);
    respuesta = html.replace("{texto}", texto).replace("{clase}", icon).replace("{ruta}", image)
    contenidoM.innerHTML = respuesta;
    contenidoM.className = alerta;
}

async function asyncElTiempo(fecha) {
    const tarde = await generarNumero();
    texto  = "La tarde del " + fecha + " la temperadura será de " + tarde + " estará " + obtenerClima(tarde);
    respuesta = html.replace("{texto}", texto).replace("{clase}", icon).replace("{ruta}", image)
    contenidoT.innerHTML = respuesta;
    contenidoT.className = alerta;
    const noche = await generarNumero();
    texto  = "La noche del " + fecha + " la temperadura será de " + noche + " estará " + obtenerClima(noche);
    respuesta = html.replace("{texto}", texto).replace("{clase}", icon).replace("{ruta}", image)
    contenidoN.innerHTML = respuesta;
    contenidoN.className = alerta;
}

async function asynMostrar(fecha) {
    asyncClima(fecha).then(() => {
        asyncElTiempo(fecha);
    });
}

function obtenerClima(temperatura) {

    let clima = ""

    if (temperatura <= 18) {
        clima = "Nublado";
        color = "alert alert-dark";
        icon = "bi bi-cloud-fill";
        alerta = "alert alert-dark";
        image = "M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z";
    } else if (temperatura > 18 && temperatura < 25) {
        clima = "Lluvioso";
        color = "alert alert-info";
        icon = "bi bi-cloud-drizzle";
        alerta = "alert alert-info";
        image = "M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973zM8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 2z";
    } else {
        clima = "Despejado";
        color = "alert alert-warning";
        icon = "bi bi-cloud";
        alerta = "alert alert-warning";
        image ="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"
    }

    return clima;
}

form.addEventListener('submit', (event) => {
    event.preventDefault()

    var date = new Date(fecha.value);

    dia = new Date().getDate()
    mes = new Date().getMonth() + 1;
    anio = new Date().getFullYear();

    let current = dia + "/" + mes + "/" + anio;

    asynMostrar(current);
});
