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
  

// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
  // Seleciona os elementos do DOM
  const menuIcon = document.getElementById('menu-icon'); // Ícone de abrir
  const menuMobile = document.getElementById('menu-mobile'); // Menu mobile
  const btnFechar = document.getElementById('btn-fechar'); // Ícone de fechar

  // Adiciona um evento de clique no ícone de abrir
  menuIcon.addEventListener('click', function() {
      menuMobile.classList.add('active'); // Adiciona a classe 'active' para mostrar o menu
  });

  // Adiciona um evento de clique no ícone de fechar
  btnFechar.addEventListener('click', function() {
      menuMobile.classList.remove('active'); // Remove a classe 'active' para esconder o menu
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