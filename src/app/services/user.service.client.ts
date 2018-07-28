export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response != null) {
        return response.json()
      }else {
        return;
      }
    });
  }

  logout() {
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => {
      if (response != null) {
        return response.json()
      }else {
        return;
      }
    });
  }

  updateUser(user) {
    return fetch('https://node-lexikacoyannakis.herokuapp.com/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include',
      method: 'put',
      headers:{
        'content-type': 'application/json'
      }
    }).then(response => {
      return response.json();
    });
  }
}
