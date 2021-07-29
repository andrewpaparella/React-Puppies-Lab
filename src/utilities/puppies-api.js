
const BASE_URL = '/api/puppies';

export function create(pup){
	return fetch(`${BASE_URL}/new`, {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(pup)
	}).then(res => res.json());
}

export function getAll(){
	return fetch(BASE_URL, {
		method: "GET",
		header: {'Content-Type': 'application/json'},
		body: JSON.stringify()
	}).then(res => res.json());
}

export function update(pup){
	return fetch(`${BASE_URL}/${pup._id}`, {
		method: 'PUT',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(pup),
	}).then(res => res.json())
}

export function deleteOne(id){
	return fetch(`${BASE_URL}/${id}`, {
		method: 'DELETE',
	}).then(res => res.json());
}