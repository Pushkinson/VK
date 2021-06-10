import appForm from './appForm.js';

async function getData() {
  try {
    const responce = await fetch('./data.json');
    const data = await responce.json();

    return data;
  } catch(error) {
    console.error(error);
  }
}

const formData = await getData();

const form = new appForm(formData);
