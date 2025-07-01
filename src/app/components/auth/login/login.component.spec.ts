import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('SignupComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.contains('firstName')).toBe(true);
    expect(component.loginForm.contains('lastName')).toBe(true);
    expect(component.loginForm.contains('email')).toBe(true);
    expect(component.loginForm.contains('gender')).toBe(true);
    expect(component.loginForm.contains('zipcode')).toBe(true);
    expect(component.loginForm.contains('phoneNumber')).toBe(true);
  });

  it('should validate form correctly', () => {
    component.loginForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'male',
      zipcode: '12345',
      phoneNumber: '1234567890'
    });

    expect(component.loginForm.valid).toBe(true);

    component.loginForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      zipcode: '',
      phoneNumber: ''
    });

    expect(component.loginForm.valid).toBe(false);
  });

  it('should call onSubmit when form is submitted', () => {
    const submitSpy = spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(submitSpy).toHaveBeenCalled();
  });
});
