//variables y constantes
const crearMartiz = document.querySelector('.BotomCrearMatriz');
const Matriz1 = document.querySelector('.MatrzACrear__Interior1');
const Matriz2 = document.querySelector('.MatrzACrear__Interior2');
const formulario = document.querySelector('.formulario');
const botomRecargar = document.querySelector('.Botom');
const columnas = document.querySelector('.NumColumnas');
const filas = document.querySelector('.NumFilas');
const BotomSuma = document.querySelector('.BotomSumar');
const formularioSuma = document.querySelector('.ReqSumar');
const ResuldadoSuma = document.querySelector('.Resuldado__suma');
const tabla1 = document.querySelector('.tabla1');
const tabla2 = document.querySelector('.tabla2');
const tablaResultado = document.querySelector('.values');
const escalar1 = document.querySelector('.Escalar1')
const escalar2 = document.querySelector('.Escalar2')
total_filas = filas.value;
total_columnas = columnas.value;

//Funciones de los botones

formulario.addEventListener('submit', crearCeldas);

botomRecargar.addEventListener('click', _ =>{
    location.reload();
})

formularioSuma.addEventListener('submit', realizarSuma)


//funciones de los botnoes

function crearCeldas(event) {
    event.preventDefault();
    crearNoCeldas();
    const divdesbloquear = document.querySelector('.Matrices');
    divdesbloquear.classList.toggle('inactive');
    crearMartiz.setAttribute("disabled", " ");
    columnas.setAttribute("disabled", " ");
    filas.setAttribute("disabled", " ");

};

function realizarSuma(event){
    event.preventDefault();
    ResuldadoSuma.classList.toggle('inactive');
    botomRecargar.classList.add('inactive');
    BotomSuma.setAttribute("disabled", " ");
    bloquear();
    valor();
    escalar1.setAttribute("disabled", " ");
    escalar2.setAttribute("disabled", " ");

    
}
//Funciones para los metodos



function crearNoCeldas(){ 
    

    let i = 0;
    let fil = "fila1";
    let o = 1;
    let datos = 1;
    let columns = Number(total_columnas);
    while (i != total_filas){
        let filasConstruir = document.createElement('tr');
        
        fil = fil + o;
       
        filasConstruir.classList.add(fil);
        tabla1.appendChild(filasConstruir);
        filasColummnas(total_columnas, fil, datos);
        i = i + 1;
        o = o + 1;
        datos = columns + datos;
        fil = "fila1";
        

    }
    datos = total_columnas * total_filas + 1;
    i = 0;
    fil = "fila2";
    o = 1;
    while (i != total_filas){
        let filasConstruir = document.createElement('tr');
        
        fil = fil + o;
       
        filasConstruir.classList.add(fil);
        tabla2.appendChild(filasConstruir);
        filasColummnas(total_columnas, fil, datos);
        i = i + 1;
        o = o + 1;
        fil = "fila2";
        datos = columns + datos;
        

    }
    
};

function filasColummnas(columnas, filas, noValores){
    let i = 0;
    let clase = "." + filas;
    let fila = document.querySelector(clase);
    let valor ="valor";

    while(i != columnas){
        let columnasconstruir = document.createElement('th');
        let input = document.createElement('input');
        input.setAttribute('type', 'number');
        
        valor = valor + noValores
        input.classList.add(valor)
        input.classList.add('Styleinput2');
        input.setAttribute("ondrop", "return false;");
        input.setAttribute("onpaste", "return false;");
        input.setAttribute("onkeypress", "return event.charCode>=48 && event.charCode<=57");
        input.setAttribute("required", " ");
        columnasconstruir.appendChild(input);
        fila.appendChild(columnasconstruir);
        noValores = noValores +1;
        
        i = i + 1;
        
        valor = "valor";

        
    }
};


function valor(){
    let i = 0
    let fil = "filaResultado";
    let datos = 1;
    let o = 1;
    let columns = Number(total_columnas);
    datos = (total_columnas * total_filas)* 2 + 1;
    while (i != total_filas){
        let filasConstruir = document.createElement('tr');
        fil = fil + o;
       
        filasConstruir.classList.add(fil);
        tablaResultado.appendChild(filasConstruir);
        filasColummnas(total_columnas, fil, datos);
        i = i + 1;
        o = o + 1;
        datos = columns + datos;
        fil = "filaResultado";
    }

    Sumando();

    
    
};
function bloquear(){
    let bolqueado = (total_columnas * total_filas) * 2;
    let dato = ".valor";
    let no = 1;

    while(bolqueado != 0){
        dato = dato + no;
        let bloquea= document.querySelector(dato)
        bloquea.setAttribute("disabled", "");
        no = no + 1;
        dato = ".valor";
        bolqueado = bolqueado - 1;
        
    }
}
function Sumando(){
    let MatrizSumar1 = [];
    let contador = Number(total_columnas * total_filas);
    let no = 1;
    let i = 0;
    let escalar = Number(escalar1.value)
    creandoMatrices(MatrizSumar1, contador, i, no, escalar);
    let MatrizSumar2 =[];
    i = Number(total_columnas * total_filas);
    no = Number(total_columnas * total_filas) + 1;
    contador = contador * 2;
    escalar = Number(escalar2.value);
    creandoMatrices(MatrizSumar2, contador, i, no, escalar);
    let matrizSumada = [];
    sumado(MatrizSumar1, MatrizSumar2, matrizSumada);
    i = Number(total_columnas * total_filas)*2;
    no = Number(total_columnas * total_filas)*2 + 1;
    contador = Number(total_columnas * total_filas);
    contador = contador*3;
    agregandoSuma(contador, i, no, matrizSumada);


    console.log(MatrizSumar1);
    console.log(MatrizSumar2);
    console.log(matrizSumada);
}

function creandoMatrices(matriz, contador, i, no, escalar){
    let dato = ".valor";
    while(i != contador){
        dato = dato + no;
        let bloquea= document.querySelector(dato);
        console.log(dato)
        let numero = Number(bloquea.value);
        ;
        if(escalar == 1){
            matriz.push(numero);
        }else{
            numero = escalar * numero
            matriz.push(numero);
        }
        
        no = no + 1;
        dato = ".valor";
        i = i + 1;
    }

}

function sumado(matrz1, matriz2, matrizSuma){
    let i = 0;
    let o = matrz1.length
    while(i != o){
        let no1 = Number(matrz1[i]);
        let no2 = Number(matriz2[i]);
        let resultado = no1 + no2;
        matrizSuma.push(resultado);
        i = i + 1;
    }
}
function agregandoSuma(cuanto, i, numero, matriz){
    let  dato = ".valor";
    let atribut = "";
    let o = 0;
    while(i != cuanto)
    {
        dato = dato + numero;
        let noAgregar = matriz[o];
        atribut = atribut + noAgregar;
        let añade = document.querySelector(dato);
        añade.setAttribute("value", atribut);
        añade.setAttribute("disabled", "");
        console.log(atribut);
        dato = ".valor";
        numero = numero + 1;
        atribut = "";
        o = o + 1;
        i = i + 1;
        
    }
}