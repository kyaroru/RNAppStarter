// Example usage here, uncomment the following in actual usage
// import api from './helper';

// export const signIn = data =>
//   api.post('api/Login', data);

// Mock api here, remove it in actual usage
export const signIn = credentials => new Promise((resolve, reject) => {
  if (credentials.username === 'test' && credentials.password === '1234') {
    // mocking api request
    setTimeout(() => {
      const token = 'fake-token';
      resolve(token);
    }, 2000);
  } else {
    reject('Invalid credentials');
  }
});
