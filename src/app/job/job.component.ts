import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() listOfJobs: any;
  @Output() notify = new EventEmitter();
  checkoutForm;
  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      companyName: '',
      jobTitle: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(data) {
    data.id = 5;
    this.listOfJobs.push(data);
    this.checkoutForm.reset();
  }

}
