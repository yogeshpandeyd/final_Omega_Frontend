import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RejectedCibilComponent } from './rejected-cibil/rejected-cibil.component';
import { AcceptedCibilComponent } from './accepted-cibil/accepted-cibil.component';

// --- Kunal Jadhav Start

import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { AllLedgerDataComponentComponent } from './all-ledger-data-component/all-ledger-data-component.component';
import { SinglePersonLedgerDataComponentComponent } from './single-person-ledger-data-component/single-person-ledger-data-component.component';
//--- End


const reRouting: Routes = [
  { path: 'enquiry', component: EnquiryFormComponent },
  { path: 'viewenquiry', component: ViewEnquiryComponent },
  { path: 'loanform', component: LoanFormComponent },
  { path: 'rejected', component: RejectedCibilComponent },
  { path: 'accepted', component: AcceptedCibilComponent },
  { path: 'allledgerdata', component: AllLedgerDataComponentComponent },
  { path: 'singlepersonledgerdata', component: SinglePersonLedgerDataComponentComponent },

  

];

@NgModule({
  declarations: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent, RejectedCibilComponent, AcceptedCibilComponent, AllLedgerDataComponentComponent, SinglePersonLedgerDataComponentComponent],
  imports: [CommonModule, RouterModule.forChild(reRouting),
    ReactiveFormsModule,FormsModule,HttpClientModule,
    //kunal Jadhav
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatStepperModule,
    MatCardModule
    //
  
  ],
  exports: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent,RejectedCibilComponent,AcceptedCibilComponent, AllLedgerDataComponentComponent, SinglePersonLedgerDataComponentComponent],
})
export class RelationExecutiveModule {}
