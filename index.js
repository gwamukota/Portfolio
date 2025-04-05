function sendEmail() {
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_rjtbn9q";
  const templateID = "template_03yyrzq";

  emailjs.send(serviceID, templateID, templateParams)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
function acceptCookies() {
  document.getElementById("cookieBanner").style.display = "none";
  document.cookie = "cookies_accepted=true; max-age=" + 60 * 60 * 24 * 30 + "; path=/";
}

window.onload = function () {
  if (!document.cookie.includes("cookies_accepted=true")) {
    document.getElementById("cookieBanner").style.display = "block";
  }
};

