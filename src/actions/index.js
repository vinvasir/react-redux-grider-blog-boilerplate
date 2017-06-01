import axios from 'axios';

const ROOT_URL = 'https://pv-rails-api-test.herokuapp.com/v1';
const API_KEY = '?key=hbiggledyfewab';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts`)

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(values, callback) {
	const request = axios.post(`${ROOT_URL}/posts`, values)
		.then(() => callback());

	return {
		type: CREATE_POST,
		payload: request
	}
};