import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dataService:DataService){}
  public btn:any="Generate";
  onSubmit(text:any)
  {
      this.btn="Please wait..."
      console.log("Called[1]");
      let data={text:text};  
      this.dataService.submitText(data).subscribe((response:any)=>{
         console.log("API response-->",response);
         while(true)
         {
            setTimeout(() => {
               
            }, response?.eta);
         }
      })
  }
}
