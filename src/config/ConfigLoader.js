import {default as devCtags} from './DevCtags.js';
import {default as prodCtags} from './ProdCtags.js';
import {default as apiEndpoints} from './ApiEndpoints.js';

const REACT_APP_ENV = process.env.REACT_APP_ENV || "local";
const apiConfig = apiEndpoints[REACT_APP_ENV];
const ctagsConfig = process.env.REACT_APP_ENV === "prod" ? prodCtags : devCtags;

export function getCtagsConfig() {
  return ctagsConfig;
}

export function getApiConfig() {
  return apiConfig;
}