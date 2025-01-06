import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  list_contact=[
    {class_name:'contact_localization', icon:'assets/icons/localization.svg', txt_name:'Viaduto do Chá, 15 - Centro Histórico de São Paulo, São Paulo - SP, 01007-040'},
    {class_name:'contact_email', icon:'assets/icons/email.svg', txt_name:'codata@prefeitura.sp.gov.br'},
    {class_name:'contact_telephone', icon:'assets/icons/telephone.svg', txt_name:'+55 11 3113-9185'}
  ];

}
