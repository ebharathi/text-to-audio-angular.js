import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
}
