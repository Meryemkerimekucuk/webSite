
// EmailJS başlat
(function () {
  emailjs.init("9YOo5RZFqkQufiKbE");
})();

// Form gönderimi
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("tavuk");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs
        .sendForm("service_emkdaih", "template_99z1gf7", this)
        .then(
          function () {
            alert("Mesajınız başarıyla gönderildi, teşekkür ederiz!");
            form.reset();
          },
          function (error) {
            alert("Bir hata oluştu: " + JSON.stringify(error));
          }
        );
    });
  }
});

