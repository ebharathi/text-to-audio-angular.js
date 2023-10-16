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
  public Download:any="";
  public downloadLink:any="";
  private intervalId:any="";
  onSubmit(text:any)
  {
      this.btn="Please wait..."
      console.log("Called backend");
      let data={text:text};  
      this.dataService.submitText(data).subscribe((response:any)=>{
         console.log("API response-->",response);
         this.intervalId=setInterval(()=>this.runStatusCheck(response.id),5000);
      })
  }
  runStatusCheck(id:any)
  {
      console.log("STATUS CHECKING[+] FOR ",id);
      this.dataService.getStatus(id).subscribe((statusResponse:any)=>{
        console.log("STATUS RESPONSE CAME, STATUS:",statusResponse?.status);
        console.log("FULL RESPONSE: ",statusResponse);
        if(statusResponse.status=="success")
        {
          this.Download="Download";
          this.btn="Genarate";
          this.downloadLink=statusResponse?.url;
          clearInterval(this.intervalId);
        }
      });
  }
}
