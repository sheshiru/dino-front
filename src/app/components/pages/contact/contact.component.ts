import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name;
  email;
  message;
  
  constructor(private mail:MailService) { }

  ngOnInit() {

  }

  submit(form:NgForm){
    const formData = {
      name: form.value["name"],
      email:form.value["email"],
      message: form.value["message"]
    }
    this.mail.sendMail(formData);
  }
}
