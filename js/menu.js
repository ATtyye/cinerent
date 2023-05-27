function cambiarSeccion(event) {
  const seccion1 = document.getElementById("seccion1");
  const seccion2 = document.getElementById("seccion2");
  const seccion3 = document.getElementById("seccion3");
  const seccion4 = document.getElementById("seccion4");
  const todo = document.getElementById("todo");

  if (event == 'animacion') {
    seccion1.style.display = "block";
    seccion2.style.display = "none";
    seccion3.style.display = "none";
    seccion4.style.display = "none"
    
  } else if (event == 'accion') {
    seccion1.style.display = "none";
    seccion2.style.display = "block";
    seccion3.style.display = "none";
    seccion4.style.display = "none";
  } else if (event == 'romance') {
    seccion1.style.display = "none";
    seccion2.style.display = "none";
    seccion3.style.display = "block";
    seccion4.style.display = "none";
  } else if (event == 'clasicas') {
    seccion1.style.display = "none";
    seccion2.style.display = "none";
    seccion3.style.display = "none";
    seccion4.style.display = "block";
  } else if (event == 'todas') {
    seccion1.style.display = "block";
    seccion2.style.display = "block";
    seccion3.style.display = "block";
    seccion4.style.display = "block";
  }
}


// profe quiero destacar que este js lo he construido yo y que no venia con la plantilla. 