import * as usersAPI from "./users-api";

export async function signUp(userData) {
  try {
      const token = await usersAPI.signUp(userData);
      localStorage.setItem('token', token)
    return getUser();
  } catch {
    throw new Error("Invalid Sign Up");
  }
}

export function getToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token');
    return null
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function login(credentials) {
	try {
		// Delegate the network request code to the users-api.js API module
		// which will ultimately return a JSON Web Token (JWT)
		const token = await usersAPI.login(credentials);
		// Persist the "token"
		localStorage.setItem('token', token);
		return getUser();
	} catch {
		throw new Error('Invalid Login');
	}
}

export function checkToken() {
	return usersAPI.checkToken().then(dateStr => new Date(dateStr));
	// return a Date object for more flexibility
}