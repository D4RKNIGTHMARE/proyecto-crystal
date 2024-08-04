/*Logica de la seccion de historia de crystal*/ 
document.addEventListener('DOMContentLoaded', () => {
    const groupHistory = document.getElementById('group-history');

    function checkScroll() {
        const rect = groupHistory.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            groupHistory.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica al cargar la página
});

/*Logica del video del header*/
document.addEventListener("DOMContentLoaded", function() {
    var bgVideo = document.getElementById("bgVideo");
    
    setTimeout(function() {
        var textHeader = document.getElementById("textHeader");
        var TextHeader = document.getElementById("TextHeader2");
        textHeader.classList.add("changed-color");
        TextHeader2.classList.add("change-color-2");
    }, 28000); 

    
    bgVideo.addEventListener("ended", function() {
        bgImage.classList.add("hidden");
    });
});

/*Logica de los Integrantes*/

document.querySelectorAll('.integrante').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.integrante').forEach(i => {
        if (i !== item) i.classList.remove('show-info');
      });
      item.classList.toggle('show-info');
    });
  });
  