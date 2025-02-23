import { cookies } from 'next/headers'

async function rest(endpoint, useSession = true) {
	let headers = { 
		'Authorization' : 'Basic ' + btoa(process.env.VVVEB_USER + ":" + process.env.VVVEB_PASSWORD),
	};	
	
	let vvveb;

	const response = await fetch(
		`${process.env.VVVEB_PUBLIC_API_URL}/${endpoint}`, {
			headers,
			credentials: 'include'
		});
	
	const res = await response.json();
	return res;
};

export default rest;
