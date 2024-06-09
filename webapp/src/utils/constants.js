export const LOCAL_URL_NPM = 'http://127.0.0.1:8080/api';
export const LOCAL_URL_FLASK = 'https://127.0.0.1:5000/api';
export const BASE_URL = 'https://test-project.appspot.com/api';
var varendpoint = BASE_URL;
if(window.location.hostname.startsWith('5173-cs-')){
    varendpoint = LOCAL_URL_FLASK;
} else if (window.location.hostname.startsWith('localhost')) {
    varendpoint = LOCAL_URL_NPM;
}
export const ENDPOINT = varendpoint;