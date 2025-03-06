import { Component, OnInit } from '@angular/core';
import { Contact } from './service/contact';
import { ContactService } from './service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  contact: Contact[] = [];

  constructor(
    private contactService: ContactService
  ){  }

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contact) => {
      this.contact = contact;
    });
  }
}
