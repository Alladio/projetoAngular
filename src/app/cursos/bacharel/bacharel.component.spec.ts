import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacharelComponent } from './bacharel.component';

describe('BacharelComponent', () => {
  let component: BacharelComponent;
  let fixture: ComponentFixture<BacharelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacharelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacharelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
