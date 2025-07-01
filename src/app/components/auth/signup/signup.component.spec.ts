import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls', () => {
    expect(component.signupForm).toBeDefined();
    expect(component.signupForm.contains('firstName')).toBe(true);
    expect(component.signupForm.contains('lastName')).toBe(true);
    expect(component.signupForm.contains('email')).toBe(true);
    expect(component.signupForm.contains('gender')).toBe(true);
    expect(component.signupForm.contains('zipcode')).toBe(true);
    expect(component.signupForm.contains('phoneNumber')).toBe(true);
  });

  it('should validate form correctly', () => {
    component.signupForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'male',
      zipcode: '12345',
      phoneNumber: '1234567890'
    });

    expect(component.signupForm.valid).toBe(true);

    component.signupForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      zipcode: '',
      phoneNumber: ''
    });

    expect(component.signupForm.valid).toBe(false);
  });

  it('should call onSubmit when form is submitted', () => {
    const submitSpy = spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(submitSpy).toHaveBeenCalled();
  });
});
