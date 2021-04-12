import axios from 'axios';
import CONFIG from './config';

export function getWeekStart(contains: Date) {
  if (contains.getDay() === CONFIG.weekStartsOn) return contains;
  else {
    contains.setDate(contains.getDate()-contains.getDay()+ CONFIG.weekStartsOn);
    return contains;
  } 
}

export async function fetch(url: string, options: any) {
  return axios(url,options);
}
