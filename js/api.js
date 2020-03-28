class Api {
  constructor(options) {
    this.options = options;
  }

  getUser() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: this.options.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch(err => console.log(`Ошибка ${err}`));
  }

  getInitialCards() {
    return fetch(`${this.options.baseUrl}/cards`, {
      headers: this.options.headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch(err => console.log(`Ошибка ${err}`));
  }

  newUser(name, about) {
    fetch(`${this.options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify({
        name: name, 
        about: about
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch(err => console.log(`Ошибка ${err}`));
  }

  newCard(name, link){
    fetch(`${this.options.baseUrl}/cards`, {
      method: "POST",
      headers: this.options.headers,
      body: JSON.stringify({
        name: name, 
        about: link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch(err => console.log(`Ошибка ${err}`));
  }
}
