import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile.component';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProfileComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls', () => {
    expect(component.profileForm).toBeDefined();
    expect(component.profileForm.contains('firstName')).toBe(true);
    expect(component.profileForm.contains('lastName')).toBe(true);
    expect(component.profileForm.contains('email')).toBe(true);
    expect(component.profileForm.contains('gender')).toBe(true);
    expect(component.profileForm.contains('zipcode')).toBe(true);
    expect(component.profileForm.contains('phoneNumber')).toBe(true);
  });

  it('should validate form correctly', () => {
    component.profileForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'male',
      zipcode: '12345',
      phoneNumber: '1234567890'
    });

    expect(component.profileForm.valid).toBe(true);

    component.profileForm.setValue({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      zipcode: '',
      phoneNumber: ''
    });

    expect(component.profileForm.valid).toBe(false);
  });

  it('should call onSubmit when form is submitted', () => {
    const submitSpy = spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(submitSpy).toHaveBeenCalled();
  });
});
