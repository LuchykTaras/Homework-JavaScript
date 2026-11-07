const defaultColors = [
  { name: 'YELLOWGREEN', type: 'RGB', code: '154, 205, 50' },
  { name: 'DARKCYAN', type: 'RGBA', code: '0, 139, 139, 1' },
  { name: 'ORANGERED', type: 'HEX', code: '#FF4500' }
];

let colors = [];

function setCookie(name, value, hours) {
  const date = new Date();
  date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
  const expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(JSON.stringify(value)) + expires + "; path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      try {
        return JSON.parse(decodeURIComponent(c.substring(nameEQ.length)));
      } catch (e) {
        return null;
      }
    }
  }
  return null;
}

function validateForm(name, type, code) {
  let isValid = true;
  const nameError = document.getElementById('nameError');
  const codeError = document.getElementById('codeError');
  
  nameError.textContent = '';
  codeError.textContent = '';

  const nameTrimmed = name.trim();
  if (!nameTrimmed) {
    nameError.textContent = 'Color name is required';
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(nameTrimmed)) {
    nameError.textContent = 'Color can only contain letters';
    isValid = false;
  } else {
    const nameExists = colors.some(c => c.name.toLowerCase() === nameTrimmed.toLowerCase());
    if (nameExists) {
      nameError.textContent = 'Color name must be unique';
      isValid = false;
    }
  }

  const codeTrimmed = code.trim();
  
  if (type === 'RGB') {
    const rgbPattern = /^(\s*(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\s*,\s*){2}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\s*$/;
    if (!rgbPattern.test(codeTrimmed)) {
      codeError.textContent = 'RGB code must match the pattern [0-255], [0-255], [0-255]';
      isValid = false;
    }
  } else if (type === 'RGBA') {
    const rgbaPattern = /^(\s*(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])\s*,\s*){3}(0|1|0?\.\d+)\s*$/;
    if (!rgbaPattern.test(codeTrimmed)) {
      codeError.textContent = 'RGBA code must match pattern [0-255], [0-255], [0-255], [0-1]';
      isValid = false;
    }
  } else if (type === 'HEX') {
    const hexPattern = /^#[0-9a-fA-F]{6}$/;
    if (!hexPattern.test(codeTrimmed)) {
      codeError.textContent = 'HEX code must match #XXXXXX (e.g. #FF4500)';
      isValid = false;
    }
  }

  return isValid;
}

function getCssColor(type, code) {
  if (type === 'RGB') return `rgb(${code})`;
  if (type === 'RGBA') return `rgba(${code})`;
  if (type === 'HEX') return code;
  return '#fff';
}

function renderPalette() {
  const paletteContainer = document.getElementById('palette');
  paletteContainer.innerHTML = '';

  colors.forEach(colorObj => {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.style.backgroundColor = getCssColor(colorObj.type, colorObj.code);

    card.innerHTML = `
      <div class="color-card-inner">
        <div class="color-name">${colorObj.name}</div>
        <div class="color-type">${colorObj.type}</div>
        <div class="color-code">${colorObj.code}</div>
      </div>
    `;
    paletteContainer.appendChild(card);
  });
}

function init() {
  const savedColors = getCookie('colorsPalette');
  if (savedColors && Array.isArray(savedColors) && savedColors.length > 0) {
    colors = savedColors;
  } else {
    colors = [...defaultColors];
    setCookie('colorsPalette', colors, 3);
  }
  renderPalette();
}

document.getElementById('saveBtn').addEventListener('click', () => {
  const nameInput = document.getElementById('colorName');
  const typeInput = document.getElementById('colorType');
  const codeInput = document.getElementById('colorCode');

  const name = nameInput.value;
  const type = typeInput.value;
  const code = codeInput.value;

  if (validateForm(name, type, code)) {
    colors.push({
      name: name.trim().toUpperCase(),
      type: type,
      code: code.trim()
    });

    setCookie('colorsPalette', colors, 3);
    renderPalette();

    nameInput.value = '';
    codeInput.value = '';
  }
});

init();