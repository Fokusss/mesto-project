const showInputError = (form, input) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.textContent = input.validationMessage
  input.classList.add('form__input_type_error');
  error.classList.add('form__input_error-active');
}

const hideInputError = (form, input) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.textContent = ''
  input.classList.remove('form__input_type_error');
  error.classList.remove('form__input_error-active');
}

const isValid = (form, input) => {
  if (!input.validity.valid){
    showInputError(form, input);
  } else {
    hideInputError(form, input);
  }
}

const hasValidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid
  })
}

const toggleActiveButton = (inputList, button) => {
  if (hasValidInput(inputList)) {
    button.classList.add('form__save_disabled');
    button.setAttribute('disabled', '');
  } else {
    button.classList.remove('form__save_disabled');
    button.removeAttribute('disabled', '');
  }
}


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonSave = formElement.querySelector('.form__save');
  inputList.forEach(input => {
    input.addEventListener('input', () => {
      isValid(formElement, input)
      toggleActiveButton(inputList, buttonSave);
    });
  });
}

const setValidationForm = () => {
  const forms = Array.from(document.forms);
  forms.forEach(form => {
    setEventListeners(form);
  })
}

export {
  showInputError, hideInputError, isValid, hasValidInput, toggleActiveButton,
  setEventListeners, setValidationForm
}
