import axios, { type AxiosResponse } from 'axios'
const client = axios.create({
  baseURL: 'http://localhost:8080/v1'
});

export default class CollectionsService {
  public async getCollections(): Promise<string[]> /* TODO:  add return type : themes class*/ {
    return client.get('/collections')
      .then((value) => {
        return Promise.resolve(value.data);
      })
      .catch((error) => {
        return Promise.reject(this.handleError(error));
      });
  }

  handleError(error: any){
    if(error.response){
      const errorResponse = error.response;
      return "Api message : " + errorResponse.status + ":" + errorResponse.data.status + "_" + errorResponse.data.message;
    } else if(error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    return "An error occured. Try again later.";
     
  }
}
