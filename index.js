var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemen = document.getElementById("sidemenu");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    function openmenu(){
        sidemeu.style.right="0";
    }
    function closemenu(){
        sidemeu.style.right="-200px";
    }

}

const scriptURL =
        "https://script.google.com/macros/s/AKfycby9549U8idhu4yE0dMGhQonN6cVOLJq8F5Epz6Ostr5zwdpLwjoO9YZmGvt32eoaZPI/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg")

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML= "Message sent Successfully!"
            setTimeout(function(){
              msg.innerHTML=""
            },5000)
            form.reset()
          })
          .catch((error) => console.error("Error!", error.message));
      });