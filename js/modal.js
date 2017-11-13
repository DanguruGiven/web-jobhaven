// Modal
var dialog = document.querySelector('dialog');
var showModalButton = document.querySelector('.show-modal');
if (!dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}
showModalButton.addEventListener('click', function() {
  dialog.showModal();
});
dialog.querySelector('.btn-close').addEventListener('click', function() {
  dialog.close();
});


// SnackBar
(function() {
  'use strict';
  var snackbarContainer = document.querySelector('#demo-snackbar-example');
  var showSnackbarButton = document.querySelector('#demo-show-snackbar');
  var handler = function(event) {
    showSnackbarButton.style.backgroundColor = '';
  };
  showSnackbarButton.addEventListener('click', function() {
    'use strict';
    showSnackbarButton.style.backgroundColor = '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16);
    var data = {
      message: 'Job Saved.',
      timeout: 2000,
      actionHandler: handler,
      actionText: 'Undo'
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());

$(document).ready(function(e){
  //Variables
  var qualification = '<div><span class="mdl-chip mdl-chip--deletable">
    <span class="mdl-chip__text">Deletable Chip</span>
    <button type="button" id="cancel" class="mdl-chip__action"><i class="material-icons">cancel</i></button>
  </span></div>';
  //Add qualification chip to the form
  $("#add-qualification").click(function(e){
    $(".qualification-container").append(qualification);
  });

  //Remove qualification chip from the form
  $(".qualification-container").on('click','#cancel', function(e){
    $(this).parent('div').remove();
  });
});
