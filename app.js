class FormSubmit {
    constructor(settings) {
      this.settings = settings;
      this.form = document.querySelector(settings.form);
      this.formButton = document.querySelector(settings.button);
      if (this.form) {
        this.url = this.form.getAttribute("action");
      }
      this.sendForm = this.sendForm.bind(this);
    }
  
    displaySuccess() {
      this.form.innerHTML = this.settings.success;
    }
  
    displayError() {
      this.form.innerHTML = this.settings.error;
    }
  
    getFormObject() {
      const formObject = {};
      const fields = this.form.querySelectorAll("[name]");
      fields.forEach((field) => {
        formObject[field.getAttribute("name")] = field.value;
      });
      return formObject;
    }
  
    onSubmission(event) {
      event.preventDefault();
      event.target.disabled = true;
      event.target.innerText = "Enviando...";
    }
  
    async sendForm(event) {
      try {
        this.onSubmission(event);
        await fetch(this.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
      } catch (error) {
        this.displayError();
        throw new Error(error);
      }
    }
  
    init() {
      if (this.form) this.formButton.addEventListener("click", this.sendForm);
      return this;
    }
  }
  
  const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
  });
  formSubmit.init();
  

  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menuMobile = document.getElementById('menu-mobile');
    const btnFechar = document.getElementById('btn-fechar');
    const body = document.body;
  
    menuIcon.addEventListener('click', function() {
      menuMobile.classList.add('active');
      body.classList.add('menu-open');
    });
  
    btnFechar.addEventListener('click', function() {
      menuMobile.classList.remove('active');
      body.classList.remove('menu-open');
    });
  
    // Fecha o menu ao clicar nos links
    const menuLinks = document.querySelectorAll('.mobile-nav a');
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuMobile.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
  });

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in', 'slide-up');
        observer.unobserve(entry.target); // Para de observar após a animação
      }
    });
  }, {
    threshold: 0.1 // Ajuste este valor para controlar quando a animação deve começar
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});