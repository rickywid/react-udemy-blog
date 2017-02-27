import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE+POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

const URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=test';


export function fetchPosts(){
	const request = axios.get(`${URL}/posts${API_KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}

export function createPost(props){
	const request = axios.post(`${URL}/posts${API_KEY}`, props);

	return {
		type: CREATE_POST,
		payload: request
	}
}

export function fetchPost(id){
	const request = axios.get(`${URL}/posts/${id}/${API_KEY}`);

	return {
		type: FETCH_POST,
		payload: request
	}
}

export function deletePost(id){
	const request = axios.delete(`${URL}/posts/${id}/${API_KEY}`);

	return {
		type: DELETE_POST,
		payload: request
	}
}