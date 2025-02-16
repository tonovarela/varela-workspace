import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarelaSidemenuComponent } from './varela-sidemenu.component';
import { provideRouter } from '@angular/router';

describe('VarelaSidemenuComponent', () => {
  let component: VarelaSidemenuComponent;
  let fixture: ComponentFixture<VarelaSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarelaSidemenuComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarelaSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });




  it('Should call  OnSignIn when login button is clicked', () => {
    spyOn(component.onSignIn, 'emit');
    fixture.componentRef.setInput('isAuthenticated', false);
    fixture.detectChanges();
    const button= fixture.nativeElement.querySelector('[data-login]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();
    expect(component.onSignIn.emit).toHaveBeenCalled();  
  });


  it('Should call  OnSignOut when logout button is clicked', () => {
    spyOn(component.onSignOut, 'emit');
    fixture.componentRef.setInput('isAuthenticated', true);
    fixture.detectChanges();
    const button= fixture.nativeElement.querySelector('[data-logout]') as HTMLButtonElement;
    expect(button).toBeTruthy();
    button.click();
    expect(component.onSignOut.emit).toHaveBeenCalled();  

  });


});
