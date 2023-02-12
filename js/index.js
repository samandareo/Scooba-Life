const preloaderWrapper = document.querySelector('.preloader-wrapper');

window.addEventListener('load', function() {
    preloaderWrapper.classList.add('fade-out-animation');
});

function changeStyleOfham() {
        const element = document.getElementById('second-section');
        if (element.style.display === "flex") {
          element.style.display = "none";
        } else {
          element.style.display = "flex";
        }
}

function send(params) {
  var templateParams = {
      main_topic : document.getElementById("topic").value,
      from_name : document.getElementById("name").value,
      message : document.getElementById("message-text").value,
      email : document.getElementById("email").value,
      reply_to : document.getElementById("email").value
  };
   
  emailjs.send("service_rlz2pcb", "template_zpb3s7o" , templateParams)
      .then(function(response) {
         console.log('SUCCESS!', response.status);
      }, function(error) {
         console.log('FAILED...', error);
      });
  
}

function viewMsg() {
  alert("Sorry, We haven't Apple developer certificate! It is 99$ :) You can donate if you want) ");
}