export const environment = {
  production: true,
  server: {
    endpoint: 'https://still-mesa-75070.herokuapp.com/',
    routes: {
      login: 'login',
      register: 'register',
      getUsers: 'getUsers'    
    },
    bearer: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MTc3NTU4MjcsImV4cCI6MTY0OTI5MTgyNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.SwJpyUcWf1jxZOSZwELmKPT3hgu5vhHChBwZThIZt8Q"
  },
  secret: "esto no es un secreto del front"
};
