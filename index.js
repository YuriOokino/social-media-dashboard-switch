document.querySelector('.switch').addEventListener('change', () => {
    document.body.classList.toggle('light')
    document.querySelector('.slider').classList.toggle('light')
    var x = document.getElementsByClassName("grid-item");
        for (var i = 0; i < x.length; i++) {
    x[i].classList.toggle('light');
}
      toggleMode ();
      
    })

function toggleMode() {
    var x = document.querySelector(".mode");
    if (x.innerHTML === "Dark Mode") {
          x.innerHTML = "Light Mode";
    } else {
         x.innerHTML = "Dark Mode";
        }
    } 


