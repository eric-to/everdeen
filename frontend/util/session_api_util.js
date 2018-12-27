// Creates new User
export const signUp = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

// Creates new Session
export const logIn = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

// Resets current Session
export const logOut = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

// Gets user-related data
export const fetchUserInfo = user => (
  $.ajax({
    url: `/api/users/${user.id}/info`
  })
);
