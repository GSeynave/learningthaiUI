import axios, { type AxiosResponse } from 'axios'
const client = axios.create({
  baseURL: 'http://localhost:8080/v1'
});

export default class ThemesService {
  public async getThemes(): Promise<string[]> /* TODO:  add return type : themes class*/ {
    try{
      const searchResponse: AxiosResponse = await client.get('/themes');
      console.log('respones', searchResponse);
      const themesFound: string[] = searchResponse.data;
      return themesFound;
      
    } catch(error: any){
      throw new Error(this.handleError(error.response));
    }
  }

  handleError(errorResponse: any){
      return errorResponse.status + " " + errorResponse.data.status + " " + errorResponse.data.message;
  }
}
