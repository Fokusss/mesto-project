import { validateConfig } from "./data";

const showInputError = (form, input, config) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
  error.classList.add(config.errorClass);
};

const hideInputError = (form, input, config) => {
  const error = form.querySelector(`.${input.id}-error`);
  error.textContent = "";
  input.classList.remove(config.inputErrorClass);
  error.classList.remove(config.errorClass);
};

const isValid = (form, input, config) => {
  if (!input.validity.valid) {
    showInputError(form, input, config);
  } else {
    hideInputError(form, input, config);
  }
};

const hasValidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleActiveButton = (inputList, button, config) => {
  if (hasValidInput(inputList)) {
    button.classList.add(config.inactiveButtonClass);
    button.setAttribute("disabled", "");
  } else {
    button.classList.remove(config.inactiveButtonClass);
    button.removeAttribute("disabled", "");
  }
};

const setEventListeners = (formElement, config) => {
  const inputList = Array.from(
    formElement.querySelectorAll(config.inputSelector)
  );
  const buttonSave = formElement.querySelector(config.submitButtonSelector);
  inputList.forEach((input) => {
    input.addEventListener("input", () => {
      isValid(formElement, input, config);
      toggleActiveButton(inputList, buttonSave, config);
    });
  });
};

const setValidationForm = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    setEventListeners(form, config);
  });
};

function updateForm(element) {
  const inputList = Array.from(element.querySelectorAll(validateConfig.inputSelector));
  const buttonSave = element.querySelector(validateConfig.submitButtonSelector);
  inputList.forEach(inputElement => hideInputError(element, inputElement, validateConfig));
  toggleActiveButton(inputList, buttonSave, validateConfig);
}



export {
  showInputError,
  hideInputError,
  isValid,
  hasValidInput,
  toggleActiveButton,
  setEventListeners,
  setValidationForm,
  updateForm,
};
