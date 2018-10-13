import axios from 'axios'
import { FECTH_USER } from './types';

const fetchUser = () => {
	axios.get('/api/current_user')//use axios to make a get request to back end 
}