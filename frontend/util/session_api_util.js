// Creates new user
export const signUp = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

// Creates new session
export const logIn = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

// Deletes current session, resets the user's
// session token
export const logOut = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

// Grabs portfolio-related data from the user
export const fetchUserInfo = user => (
  $.ajax({
    url: `/api/users/${user.id}/info`
  })
);
