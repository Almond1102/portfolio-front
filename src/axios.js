import axios from "axios";
import cookie from "cookie";

let token = cookie.parse(req.headers.cookie || '/')

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'token': 'foobar'}
  });

export default axios;