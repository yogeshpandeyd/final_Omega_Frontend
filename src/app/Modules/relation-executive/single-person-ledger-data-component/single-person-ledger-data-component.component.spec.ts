import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePersonLedgerDataComponentComponent } from './single-person-ledger-data-component.component';

describe('SinglePersonLedgerDataComponentComponent', () => {
  let component: SinglePersonLedgerDataComponentComponent;
  let fixture: ComponentFixture<SinglePersonLedgerDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePersonLedgerDataComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePersonLedgerDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
