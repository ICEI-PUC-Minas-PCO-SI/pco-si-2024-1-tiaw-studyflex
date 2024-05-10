// Simulação de dados de tarefas em JSON
var tasks = {
    "2024-05-09": ["Tarefa 1", "Tarefa 2"],
    "2024-05-15": ["Tarefa 3"]
  };
  
  var flatpickr;
  
  var maxDate = {
    1: new Date(new Date().setMonth(new Date().getMonth() + 5)),
    2: new Date(new Date().setMonth(new Date().getMonth() + 4)),
    3: new Date(new Date().setMonth(new Date().getMonth() + 3)),
    4: new Date(new Date().setMonth(new Date().getMonth() + 2)),
    5: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    6: new Date()
  };
  
  // Função para exibir tarefas
  function showTasks(date) {
    var contents = '';
    if (tasks[date]) {
      tasks[date].forEach(function (task) {
        contents += '<div class="task">' + task + '</div>';
      });
    } else {
      contents = 'Nenhuma tarefa neste dia.';
    }
    alert(contents);
  }
  
  // Flatpickr para o calendário pequeno
  var smallFlatpickr = $('#calendar .placeholder').flatpickr({
    inline: true,
    defaultDate: "today",
    onChange: function (selectedDates, dateStr, instance) {
      showTasks(dateStr);
    }
  });
  
  // Flatpickr para o calendário grande
  var largeFlatpickr = $('#large-calendar').flatpickr({
    mode: "single",
    defaultDate: "today",
    inline: true,
    onChange: function (selectedDates, dateStr, instance) {
      showTasks(dateStr);
    }
  });
  
  function eventCalendarResize($el) {
    var width = $el.width();
    if (flatpickr.selectedDates.length) {
      flatpickr.clear();
    }
    if (width >= 992) {
      flatpickr.set('showMonths', 3);
      flatpickr.set('maxDate', maxDate[3]);
    }
    if (width < 992 && width >= 768) {
      flatpickr.set('showMonths', 2);
      flatpickr.set('maxDate', maxDate[2]);
    }
    if (width < 768) {
      flatpickr.set('showMonths', 1);
      flatpickr.set('maxDate', maxDate[1]);
      $('.flatpickr-calendar').css('width', '');
    }
  }
  
  // Atualizar data atual
  var currentDate = new Date();
  $('.task-info-title').text(currentDate.toLocaleDateString("pt-BR", { day: "2-digit", weekday: "long", year: "numeric" }));
  
  // Evento para abrir o modal grande
  $('.calendar-overlay').on('click', function () {
    $('.large-cal-modal-container').removeClass('hidden');
  });
  
  // Evento para fechar o modal grande
  $('.close-modal').on('click', function () {
    $('.large-cal-modal-container').addClass('hidden');
  });
  