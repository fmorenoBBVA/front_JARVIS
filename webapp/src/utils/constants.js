export const LOCAL_URL_FLASK = 'http://127.0.0.1:8080/api';
export const BASE_URL = 'https://test-project.appspot.com/api';
var varendpoint = BASE_URL;
if(window.location.hostname.startsWith('5173-cs-') || window.location.hostname.startsWith('5174-cs-') || window.location.hostname.startsWith('localhost')){
    varendpoint = LOCAL_URL_FLASK;
}
export const ENDPOINT = varendpoint;
