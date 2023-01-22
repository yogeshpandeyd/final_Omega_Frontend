import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/CommonServices/common.service';

@Component({
  selector: 'app-verify-loan-form-documents',
  templateUrl: './verify-loan-form-documents.component.html',
  styleUrls: ['./verify-loan-form-documents.component.scss']
})
export class VerifyLoanFormDocumentsComponent {
  verifieddata: any[];


  constructor(private fb:FormBuilder, public cs:CommonService,private router:Router){}

  showDataCm:any[];
  
  ngOnInit() {
  
  this.cs.getverified("Documents_Verified").subscribe((data:any)=>{
    this.showDataCm=data.responceData;
  });
}

generatesanctionletter(status:string)
{
  alert(status)
  this.cs.documentsverifiedsuccsfully(status).subscribe((responce:any)=>{

    this.verifieddata=responce.responceData
    this.router.navigate(["/role/creditmanager/generatesanctionletter"],
    {queryParams:{data:JSON.stringify(this.showDataCm)}});
  });
}

 
}

