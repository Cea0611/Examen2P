function calcularPrecio() {

    var nombre = document.getElementById('nombre').value;
    var estado = document.getElementById('estado').value;
    var numeroAdultos = parseInt(document.getElementById('adultos').value);
    var numeroMenores = parseInt(document.getElementById('menores').value);
    var dias = parseInt(document.getElementById('dias').value);

    var total = 0;


    var rd;
    var precioPorDias;

    precioPorDias = (numeroAdultos * 100) * dias;
    precioPorDias += (numeroMenores * 50) * dias;



    switch (estado) {
        case 'aguascalientes':
            //Aguascalientes 127Km
            rd = 127 * 150;
            break;

        case 'bajacalifornia':
            //Baja California 1,732Km
            rd = 1732 * 150;
            break;

        case 'bajacaliforniasur':
            //Baja California Sur 1,153 km
            rd = 1153 * 150;
            break;

        case 'campeche':
            //Campeche 1,503 km
            rd = 1503 * 150;
            break;

        case 'chiapas':
            //Chiapas 1,197 km
            rd = 1197 * 150;
            break;

        case 'chihuahua':
            //Chihuahua 1,075 km
            rd = 1075 * 150;
            break;

        case 'coahuila':
            //Coahuila 857 km
            rd = 857 * 150;
            break;

        case 'colima':
            //Colima 414 km
            rd = 414 * 150;
            break;

        case 'durango':
            //Durango 531 km
            rd = 531 * 150;
            break;

        case 'guanajuato':
            //Guanajuato 60.7 km
            rd = 60.7 * 150;
            break;

        case 'guerrero':
            //Guerrero 725 km
            rd = 725 * 150;
            break;

        case 'hidalgo':
            //Hidalgo 385 km
            rd = 385 * 150;
            break;

        case 'jalisco':
            //Jalisco 222 km
            rd = 222 * 150;
            break;

        case 'estadodemexico':
            //Estado de México 332 km
            rd = 332 * 150;
            break;

        case 'michoacán':
            //Michoacán 261 km
            rd = 261 * 150;
            break;

        case 'morelos':
            //Morelos 507 km
            rd = 507 * 150;
            break;

        case 'nayarit':
            //Nayarit 460 km
            rd = 460 * 150;
            break;

        case 'nuevoleon':
            //Nuevo León 750 km
            rd = 750 * 150;
            break;

        case 'oaxaca':
            //Oaxaca 823 km
            rd = 823 * 150;
            break;

        case 'puebla':
            //Puebla 498 km
            rd = 498 * 150;
            break;

        case 'querétaro':
            //Querétaro 169 km
            rd = 169 * 150;
            break;

        case 'quintanaroo':
            //Quintana Roo 1,788 km
            rd = 1788 * 150;
            break;

        case 'sanluispotosi':
            //San Luis Potosí 174
            rd = 174 * 150;
            break;

        case 'sinaloa':
            //Sinaloa 191 km
            rd = 191 * 150;
            break;

        case 'sonora':
            //Sonora 1,674 km
            rd = 1674 * 150;
            break;

        case 'tabasco':
            //Tabasco	1,166 km
            rd = 1166 * 150;
            break;

        case 'tamaulipas':
            //Tamaulipas 598 km 
            rd = 598 * 150;
            break;

        case 'tlaxcala':
            //Tlaxcala 472 km
            rd = 472 * 150;
            break;

        case 'veracruz':
            //Veracruz 732 km
            rd = 732 * 150;
            break;

        case 'yucatan':
            //Yucatán 1,756 km
            rd = 1756 * 150;
            break;

        case 'zacatecas':
            //Zacatecas 249 km
            rd = 249 * 150;
            break;

        default:
            rd = 0;
            break;
    }

    total = precioPorDias + rd;

    precioTotal = total;

    totalString = total.toString();

    var dEstado = nombre + " tu viaje es con destino a " + estado.toUpperCase();
    var dMenores = "Menores: " + numeroMenores.toString();
    var dAdultos = "Adultos: " + numeroAdultos.toString();

    console.log(dEstado);
    console.log(dMenores);

    document.getElementById("detalle-total").innerHTML = "Total: $" + totalString;
    document.getElementById("detalle-estado").innerHTML = dEstado;
    document.getElementById("detalle-menores").innerHTML = dMenores;
    document.getElementById("detalle-adultos").innerHTML = dAdultos;
    document.getElementById("detalle-text").innerHTML = "DeTaLlEs";

    
}


function changeBg(){
    var scrollValue = window.scrollY;
    console.log(scrollValue);
}

$(document).ready(function () {
    if (window.location.href.indexOf("index")> -1) {
      
    

window.addEventListener("scroll", changeBg)

// Posts
var posts = [
    {
      title: "¿Cuáles han sido las estrategias turísticas de Guanajuato este año?",
      date:
        "Publicado el día " +
        moment().format("DD") +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        "El Secretario de Turismo en Guanajuato dio a conocer al Congreso del Estado las estrategias y resultados que se han tenido en materia turística durante el 2021.",
      link:
      "https://www.liderempresarial.com/cuales-han-sido-las-estrategias-turisticas-de-guanajuato-este-ano/"
    },
    {
      title: "Día de Muertos Guadalajara 2021. Desfiles de Catrinas el 2 de Noviembre",
      date:
        "Publicado el día " +
        moment().format("DD") +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content:
        "Una oportunidad para aprovechar el Mega Puente de Noviembre son las actividades que preparó el Ayuntamiento tapatío este próximo martes 2 de noviembre para conmemorar el Día de Muertos Guadalajara 2021.",
        link:
        "https://www.unionjalisco.mx/2021/10/28/dia-de-muertos-guadalajara-2021-desfiles-de-catrinas-el-2-de-noviembre/"
    },
  ];
  console.log(posts);

  // Recorrer el JSON para enviar al index.HTML
  posts.forEach((item) => {
    var post = `<article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href=${item.link} class="button-more">Artículo completo</a>
                    <br>
                    <br>
                </article>`;
    //console.log(post);
    $("#posts").append(post);
  });

}
});
