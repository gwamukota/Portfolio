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
// Cookie Consent Banner
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
}

function openPreferences() {
  document.getElementById('cookie-preferences').classList.remove('hidden');
}

function savePreferences() {
  const preferences = {
    analytics: document.getElementById('analytics').checked,
    marketing: document.getElementById('marketing').checked,
  };
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  document.getElementById('cookie-banner').style.display = 'none';
  document.getElementById('cookie-preferences').classList.add('hidden');
}

// On load, check for existing consent
window.addEventListener('load', () => {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    document.getElementById('cookie-banner').style.display = 'block';
  }
});


