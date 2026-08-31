import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { ContactFormValidators } from '../../core/validators/contact-form.validators';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  standalone: false
})
export class ContatoComponent {
  submitted = false;
  sent = false;

  form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, ContactFormValidators.noWhitespaceOnly()]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, ContactFormValidators.noWhitespaceOnly()]]
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly contactService: ContactService
  ) {}

  submit(): void {
    this.submitted = true;
    this.sent = false;

    if (this.form.invalid) {
      return;
    }

    this.contactService.submitContactForm(this.form.getRawValue()).subscribe(() => {
      this.sent = true;
      this.form.reset();
      this.submitted = false;
    });
  }

  isInvalid(field: 'name' | 'email' | 'message'): boolean {
    const control = this.form.controls[field];
    return control.invalid && (control.touched || this.submitted);
  }
}
