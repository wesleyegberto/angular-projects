import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';

import { ContactFormComponent } from './contact-form.component';
import { ContactService } from './contact.service';

describe('ContactFormComponent', () => {
  let mockedService: jasmine.SpyObj<ContactService>;

  let fixture: ComponentFixture<ContactFormComponent>;
  let component: ContactFormComponent;

  let inputName: DebugElement;
  let inputEmail: DebugElement;
  let inputSubject: DebugElement;
  let inputMessage: DebugElement;
  let buttonSubmit: DebugElement;

  beforeEach(async(() => {
    mockedService = jasmine.createSpyObj('ContactService', ['sendContact']);

    TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [ ContactFormComponent ],
        providers: [
          // using auto detect for the form
          { provide: ComponentFixtureAutoDetect, useValue: true },
          { provide: ContactService, useValue: mockedService }
        ]
      })
      .compileComponents();

    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;

    // captures the form's elements
    inputName = fixture.debugElement.query(By.css('input[name=name]'));
    inputEmail = fixture.debugElement.query(By.css('input[name=email]'));
    inputSubject = fixture.debugElement.query(By.css('input[name=subject]'));
    inputMessage = fixture.debugElement.query(By.css('textarea[name=message]'));
    buttonSubmit = fixture.debugElement.query(By.css('button[type=submit]'));
  }));

  it('should create the component with contact fields visible and disabled button', () => {
    expect(component).toBeTruthy();

    expect(inputName).toBeTruthy();
    expect(inputEmail).toBeTruthy();
    expect(inputSubject).toBeTruthy();
    expect(inputMessage).toBeTruthy();

    expect(buttonSubmit).toBeTruthy();
    expect(buttonSubmit.properties.disabled).toBe(true);
  });

  it('should accept valid inputs and bind to model', () => {
    fillValidContactInfo();

    expect(component.contact.name).toBe('John Doe');
    expect(component.contact.email).toBe('john.doe@server.com');
    expect(component.contact.subject).toBe('Test subject');
    expect(component.contact.message).toBe('Test message');

    expect(buttonSubmit.properties.disabled).toBe(false);
  });

  it('should not allow sent e-mail', () => {
    fillValidContactInfo();

    inputEmail.nativeElement.value = 'invalid.mail@mailcom';
    inputEmail.nativeElement.dispatchEvent(new Event('input'));

    expect(buttonSubmit.properties.disabled).toBe(true);
  });

  it('should allow send contact with valid info', () => {
    spyOn(component, 'sendContact').and.callThrough();
    mockedService.sendContact.and.returnValue(of('OK'));

    fillValidContactInfo();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();

    expect(component.sendContact).toHaveBeenCalled();
    expect(mockedService.sendContact).toHaveBeenCalled();

    const message = fixture.debugElement.query(By.css('p.feedback-message'));
    expect(message).toBeTruthy();
    expect(message.nativeElement.textContent).toBe('Your message has been sent!');
    expect(message.classes['success']).toBe(true);
  });

  it('should show error when it is thrown', () => {
    spyOn(component, 'sendContact').and.callThrough();
    mockedService.sendContact.and.returnValue(throwError('Error for testing'));

    fillValidContactInfo();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();

    expect(component.sendContact).toHaveBeenCalled();
    expect(mockedService.sendContact).toHaveBeenCalled();

    const message = fixture.debugElement.query(By.css('p.feedback-message'));
    expect(message).toBeTruthy();
    expect(message.nativeElement.textContent).toBe('An error occurred while sending your message.');
    expect(message.classes['error']).toBe(true);
  });

  function fillValidContactInfo() {
    inputName.nativeElement.value = 'John Doe';
    inputName.nativeElement.dispatchEvent(new Event('input'));

    inputEmail.nativeElement.value = 'john.doe@server.com';
    inputEmail.nativeElement.dispatchEvent(new Event('input'));

    inputSubject.nativeElement.value = 'Test subject';
    inputSubject.nativeElement.dispatchEvent(new Event('input'));

    inputMessage.nativeElement.value = 'Test message';
    inputMessage.nativeElement.dispatchEvent(new Event('input'));
  }
});
