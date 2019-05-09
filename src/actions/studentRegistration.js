
import axios from 'axios';
import { GET_ERRORS } from './types';

export const registerStudent = (student, history) => dispatch => {
    axios.post('/api/students/create', student)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}