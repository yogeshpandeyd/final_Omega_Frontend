import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLedgerDataComponentComponent } from './all-ledger-data-component.component';

describe('AllLedgerDataComponentComponent', () => {
  let component: AllLedgerDataComponentComponent;
  let fixture: ComponentFixture<AllLedgerDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLedgerDataComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLedgerDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
