var html = document.getElementsByTagName('html')[0],
    type_picker = document.querySelector('.type-picker'),
    selected_type = document.querySelector('.selected'),
    change_type = document.querySelectorAll('.change-type');

// selected_type.onclick = function() {
//   if(type_picker.classList.contains('show')) return type_picker.classList.remove('show');

//   type_picker.classList.add('show');
// }

change_type.forEach(function(ct) {
  ct.onclick = function() {
    var selected = document.querySelector('.selected');

    if(type_picker.classList.contains('show')) {
      selected.classList.remove('selected');
      this.classList.add('selected');
      html.removeAttribute('class');
      html.classList.add(this.dataset.class);
      type_picker.classList.remove('show');
    } else {
      type_picker.classList.add('show');
    }
  }
});

// var input = document.querySelector('.input'),
//     select = document.querySelector('.select'),
//     button = document.querySelector('.button'),
//     num = 0;

// input.onblur = function() {
//   if(this.value !== '') {
//     num = 1;
//   } else {
//     num = 0;
//   }
  
//   checkInput(input);
// }

// input.onkeyup = function() {
//   if(num === 1) checkInput(this);
// }

// select.onchange = function() {
//   checkSelect(this);
// }

// button.onclick = function(e) {
//   e.preventDefault();
  
//   if(input.value === '' || select.value === '') {
//     num = 1;
//     checkInput(input);
//     checkSelect(select);
//     if(input.value === '') {
//       input.focus();
//     } else {
//       select.focus();
//     }
//   } else {
//     alert('good!');
//   }
// }

// function checkInput(input) {
//   var error = input.nextElementSibling;

//   if(num === 1) {
//     if(!validateEmail(input.value)) {
//       input.classList.add('error');
//       error.classList.remove('hide');
//     } else {
//       input.classList.remove('error');
//       error.classList.add('hide');
//     }
//   } else {
//     input.classList.remove('error');
//     error.classList.add('hide');
//   }
// }

// function checkSelect(input) {
//   var error = input.nextElementSibling;

//   if(input.value === '') {
//     input.classList.add('error');
//     error.classList.remove('hide');
//   } else {
//   input.classList.remove('error');
//   error.classList.add('hide');
//   }
// }

// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
