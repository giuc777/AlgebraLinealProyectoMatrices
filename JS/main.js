const opcionTemas =document.querySelector('.opcion__temas');
const opcionOperaciones = document.querySelector('.opcion_operaciones');


opcionTemas.addEventListener('click', toggleTemas);
opcionOperaciones.addEventListener('click', toggleOperaciones);

function toggleTemas(){
    const desplegateTemas = document.querySelector('.option__temas');
    const desplegateOperaciones = document.querySelector('.option__operaciones');
    const OpenOperaciones = desplegateOperaciones.classList.contains('inactive');

    
    if (!OpenOperaciones){
        desplegateOperaciones.classList.add('inactive');
    }
    desplegateTemas.classList.toggle('inactive');
}

function toggleOperaciones(){
    const desplegateOperaciones = document.querySelector('.option__operaciones');
    const desplegateTemas = document.querySelector('.option__temas');
    const TemasOpen = desplegateTemas.classList.contains('inactive');

    if(!TemasOpen){
        desplegateTemas.classList.add('inactive');
    }

    desplegateOperaciones.classList.toggle('inactive');

}