export const base_url = 'http://localhost:3000/';
export function extractData(res: Response){
  let body = res;
  return body || { };
}