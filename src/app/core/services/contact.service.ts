import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactFormModel } from '../models/contact-form.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  submitContactForm(payload: ContactFormModel): Observable<{ ok: boolean }> {
    console.info('Contact payload prepared for future API integration', payload);
    return of({ ok: true });
  }
}
