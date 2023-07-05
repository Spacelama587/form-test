window.addEventListener('DOMContentLoaded', function() {
  var choices = document.querySelectorAll('input[name="choice"]');
  var maxSelections = 3;
  var selectedCount = 0;
  var form = document.querySelector('form');

  function handleChoiceSelection(event) {
    var checkedChoices = document.querySelectorAll('input[name="choice"]:checked');
    selectedCount = checkedChoices.length;
    if (selectedCount > maxSelections || selectedCount === 0) {
      event.preventDefault();
      this.checked = false;
      selectedCount--;
    }
  }

  for (var i = 0; i < choices.length; i++) {
    choices[i].addEventListener('change', handleChoiceSelection);
  }

  form.addEventListener('submit', function(event) {
    if (selectedCount === 0) {
      event.preventDefault();
      alert('Please select at least one License type.');
    }
  });
});
