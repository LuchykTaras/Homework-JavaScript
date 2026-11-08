/* Task 1: Fetch Advice By Keyword */
function fetchAdviceByKeyword(keyword) {
  const xhr = new XMLHttpRequest();
  const url = `https://api.adviceslip.com/advice/search/${encodeURIComponent(keyword)}`;

  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);

        if (response.slips && response.slips.length > 0) {
          const adviceList = response.slips.map(item => `<p>${item.advice}</p>`).join('');
          document.body.innerHTML += `<div><h3>Поради за словом "${keyword}":</h3>${adviceList}</div>`;
        } else if (response.message) {
          document.body.innerHTML += `<p>Порада не знайдена: ${response.message.text}</p>`;
        } else {
          document.body.innerHTML += `<p>Поради за словом "${keyword}" не знайдено.</p>`;
        }
      } catch (e) {
        document.body.innerHTML += `<p>Помилка обробки JSON відповіді.</p>`;
      }
    } else {
      document.body.innerHTML += `<p>Помилка запиту: Статус ${xhr.status}</p>`;
    }
  };

  xhr.onerror = function () {
    document.body.innerHTML += `<p>Виникла помилка мережі при спробі отримати пораду.</p>`;
  };

  xhr.send();
}


/* Task 2: Fetch Dog Breeds */
function fetchDogBreeds() {
  const xhr = new XMLHttpRequest();
  const url = 'https://dog.ceo/api/breeds/list/all';

  xhr.open('GET', url, true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        const response = JSON.parse(xhr.responseText);
        if (response.status === 'success') {
          const breedsObj = response.message;
          let listElement = document.getElementById('breed-list');

          if (!listElement) {
            listElement = document.createElement('ul');
            listElement.id = 'breed-list';
            document.body.appendChild(listElement);
          }

          listElement.innerHTML = '';

          for (const breed in breedsObj) {
            const li = document.createElement('li');
            li.textContent = breed;
            listElement.appendChild(li);
          }
        } else {
          console.error('Не вдалося отримати список порід собак.');
        }
      } catch (e) {
        console.error('Помилка парсингу JSON:', e);
      }
    } else {
      console.error('Помилка HTTP:', xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error('Мережева помилка при отриманні списку порід собак.');
  };

  xhr.send();
}


/* Task 3: Fetch Random Quote */
function fetchRandomQuote() {
  const apiKey = 'YOUR_API_KEY_HERE';
  const url = 'https://api.api-ninjas.com/v1/quotes';

  fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Key': apiKey,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Помилка мережі: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data && data.length > 0) {
        const quoteData = data[0];
        let quoteContainer = document.getElementById('quote-container');

        if (!quoteContainer) {
          quoteContainer = document.createElement('div');
          quoteContainer.id = 'quote-container';
          document.body.appendChild(quoteContainer);
        }

        quoteContainer.innerHTML = `
          <blockquote>
            <p>"${quoteData.quote}"</p>
            <footer>— ${quoteData.author}</footer>
          </blockquote>
        `;
      }
    })
    .catch(error => {
      console.error('Помилка під час отримання цитати:', error);
    });
}


/* Task 4: Fetch Country By Name */
function fetchCountryByName(countryName) {
  const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(countryName)}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Країна не знайдена');
      }
      return response.json();
    })
    .then(data => {
      let countryContainer = document.getElementById('country-info');

      if (!countryContainer) {
        countryContainer = document.createElement('div');
        countryContainer.id = 'country-info';
        document.body.appendChild(countryContainer);
      }

      const country = data[0];
      const name = country.name ? country.name.common : 'Невідомо';
      const capital = country.capital ? country.capital.join(', ') : 'Невідомо';
      const region = country.region || 'Невідомо';
      const population = country.population ? country.population.toLocaleString() : 'Невідомо';
      const flagSrc = country.flags ? (country.flags.png || country.flags.svg) : '';

      countryContainer.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Столиця:</strong> ${capital}</p>
        <p><strong>Регіон:</strong> ${region}</p>
        <p><strong>Населення:</strong> ${population}</p>
        ${flagSrc ? `<img src="${flagSrc}" alt="Прапор ${name}" width="150">` : ''}
      `;
    })
    .catch(error => {
      let countryContainer = document.getElementById('country-info');

      if (!countryContainer) {
        countryContainer = document.createElement('div');
        countryContainer.id = 'country-info';
        document.body.appendChild(countryContainer);
      }

      countryContainer.innerHTML = `<p style="color: red;">Країна не знайдена</p>`;
    });
}