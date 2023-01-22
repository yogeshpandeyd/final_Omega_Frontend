import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/CommonServices/common.service';

@Component({
  selector: 'app-generate-sanction-letter',
  templateUrl: './generate-sanction-letter.component.html',
  styleUrls: ['./generate-sanction-letter.component.scss']
})
export class GenerateSanctionLetterComponent {
  showDataCm: any[];



  constructor(private activeroute:ActivatedRoute, private fb:FormBuilder, public cs:CommonService,private router:Router){}

  // eligibleforsanctionletter("a")
  // {
  //  this.cs.documentsverifiedsuccsfully(status).subscribe((data:any)=>{
  //   this.showDataCm=data.responceData

  //  })

  // }
  customerdetails:any;
  // customerdetails:any={
  //   customerId:0,
  //   customerFirstName:'',
  //   customerLastName:''

  // };
  ngOnInit():void
  {
this.activeroute.queryParams.subscribe((param)=>{
  console.log(param);
  this.customerdetails=JSON.parse(param['data']);
})
  }
  generatesanctionletter(id:number){
    this.cs.generatesanctionletter(id).subscribe();
  }

}
