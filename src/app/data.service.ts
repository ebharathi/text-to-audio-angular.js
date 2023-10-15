import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  url:any='https://large-text-to-speech.p.rapidapi.com/tts';
  submitText(data:any)
  {
    const httpOptions={
      headers:new HttpHeaders(
        {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '73e9df854cmsh6dbcd86fce82b33p1919f9jsn75aeea457c41',
          'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
        }
      )
    }
    return this.http.post(this.url,data,httpOptions);
  }
  getStatus(id:string)
  {
     console.log("Reuest for Status api[+] for the id--->",id);
     const httpOptions={
      params:new HttpParams().set('id',id), 
      headers:new HttpHeaders(
        {
          'X-RapidAPI-Key': '73e9df854cmsh6dbcd86fce82b33p1919f9jsn75aeea457c41',
          'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
        }
       )
     }
     console.log("Response came[+]");
    return this.http.get(this.url,httpOptions);
  }
}
