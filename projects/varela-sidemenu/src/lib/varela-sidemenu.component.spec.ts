import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarelaSidemenuComponent } from './varela-sidemenu.component';

describe('VarelaSidemenuComponent', () => {
  let component: VarelaSidemenuComponent;
  let fixture: ComponentFixture<VarelaSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarelaSidemenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarelaSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
