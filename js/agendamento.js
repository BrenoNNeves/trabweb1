(function (DOM) {
  'use strict';

  var app = (function () {
    return {
      init: function init() {
        this.initEvents();
      },

      initEvents() {
        DOM("[data-js='form-agendamento']").on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        var $inputName = DOM('[data-js="input-nome"]').get().value;
        var $inputTel = DOM('[data-js="input-tel"]').get().value;
        var $inputData = DOM('[data-js="input-data"]').get().value;

        console.log('Nome: ', $inputName);
        console.log('Telefone: ', $inputTel);
        console.log('Data: ', $inputData);

        window.open('telausuario.html', 'Tela Usuário', '');
      }
    };
  })();

  app.init();
})(window.DOM);
