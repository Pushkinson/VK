export default class appForm {
  constructor(data) {
    this.wrapper = document.querySelector('.wrapper');
    // this.form = this.getFormContainer();
    this.data = data;

    this.render();
    this.bindHandlers();
  }


  render() {
    this.form = this.getFormContainer();
    this.form.innerHTML = `
      <h2>Пожалуйста, заполните форму</h2>
      <div class="theme_switcher flex">
        <div class="theme_switcher_image"></div>
      </div>
    `;
    this.wrapper.append(this.form);

    // if (Object.keys(this.data)[0] === "inputs") {
      for (let i = 0; i < this.data.inputs.length; i++) {
        this.form.append(this.getFormInputElement(i));
      }

      this.form.insertAdjacentHTML('beforeend', '<h3>Контактная информация</h3>');
      for (let i = 0; i < this.data.contacts.length; i++) {
        this.form.append(this.getFormContactsElement(i));
      }

      this.form.append(this.getFormCheckboxElement());
      this.form.append(this.getFormSubmitElement());
  }

  getFormContainer() {
    const formContainer = document.createElement('form');
    formContainer.classList.add('form', 'flex');

    return formContainer;
  }

  getFormInputElement(elementNumber) {
    let formInputElement = document.createElement('div');
    formInputElement.classList.add('form__input', 'flex', 'input');

// debugger;
    switch (this.data.inputs[elementNumber].type) {
      case "text":
      case "date":
        formInputElement.innerHTML = `
          <label for="${this.data.inputs[elementNumber].id}">${this.data.inputs[elementNumber].label}</label>
          <input type="${this.data.inputs[elementNumber].type}" id="${this.data.inputs[elementNumber].id}"/>
        `;
        return formInputElement;
      case "select":
        formInputElement.innerHTML = `
          <label for="${this.data.inputs[elementNumber].id}">${this.data.inputs[elementNumber].label}</label>
          <select name="${this.data.inputs[elementNumber].id}">
            <option value="${this.data.inputs[elementNumber].value1}">${this.data.inputs[elementNumber].value1}</option>
            <option value="${this.data.inputs[elementNumber].value2}">${this.data.inputs[elementNumber].value2}</option>
          </select>
        `;
        return formInputElement;
    }
  }

  getFormContactsElement(elementNumber) {
    let formContactsElement = document.createElement('div');
    formContactsElement.classList.add('form__input', 'flex', 'input');
    formContactsElement.innerHTML = `
      <label for="${this.data.contacts[elementNumber].id}">${this.data.contacts[elementNumber].label}</label>
      <input type="${this.data.contacts[elementNumber].type}" id="${this.data.contacts[elementNumber].id}"/>
    `;
    return formContactsElement;
  }

  getFormCheckboxElement() {
    let formCheckboxElement = document.createElement('div');
    formCheckboxElement.classList.add('form__input', 'flex', 'input');
    formCheckboxElement.innerHTML = `
      <input type="${this.data.checkbox.type}" id="${this.data.checkbox.id}"/>
      <label for="${this.data.checkbox.id}">${this.data.checkbox.label}</label>
    `;

    return formCheckboxElement;
  }

  getFormSubmitElement() {
    let formSubmitElement = document.createElement('div');
    formSubmitElement.classList.add('form__submit', 'flex');
    formSubmitElement.innerHTML = `
        <input type="${this.data.submit.type}" value="${this.data.submit.text}" formaction="${this.data.submit.url}"/>
      `;

      return formSubmitElement;
  }

  bindHandlers() {
    this.wrapper.querySelector('.theme_switcher').addEventListener('click', this.changeThemeColor.bind(this));
  }

  changeThemeColor() {
    this.wrapper.classList.toggle('wrapper--dark');
    this.form.classList.toggle('form--dark');
    this.form.querySelectorAll('.form__input').forEach( (el) => {
      el.classList.toggle('form__input--dark');
    });
    console.log(this.form.querySelector('.theme_switcher_image'));
    this.form.querySelector('.theme_switcher_image').classList.toggle('theme_switcher_image--dark');
  }
}
