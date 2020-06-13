import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {JobsService} from '../services/jobs.service';
import { Location } from '@angular/common';
import {Job} from '../model/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  job: Job;
  @Input() jobList: any;
  @Output() notify = new EventEmitter();
  checkoutForm;
  jobsList: any;
  lengthList: number;
  @Output() newJobList = new EventEmitter<any[]>();

 constructor(private route: ActivatedRoute,
              private router: Router,
              private jobService: JobsService,
              private location: Location,
              ) {
  }

  ngOnInit(): void {
    this.checkoutForm = new FormGroup({
      id: new FormControl(''),
      companyName: new FormControl(''),
      jobTitle: new FormControl(''),
    });

    this.getJob();
    // console.log(this.checkoutForm);
  }

  // ngOnChanges(): void {
  //  console.log('In child ngOnchanges');
  // }
  //
  // ngDoCheck(): void {
  //  console.log('Child do check');
  // }

  onSubmit(data) {
   // console.log(data);
   if (data.id) {
      this.job.companyName = data.companyName;
      this.job.jobTitle = data.jobTitle;
      // console.log(this.job);
     this.jobList = [...this.jobsList];
     localStorage.setItem('myList', JSON.stringify(this.jobList));
     this.router.navigate(['']);
      // this.jobList.push(this.job);
     console.log(this.jobList);
    } else {
      this.lengthList = this.jobList.length;
      data.id = this.lengthList + 1;
      // console.log(data);
      this.jobList.push(data);
      localStorage.setItem('myList', JSON.stringify(this.jobList));
      // this.newJobList.emit(this.jobList);
    }
    this.checkoutForm.reset();
  }

  getJob(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobsList = localStorage.getItem('myList');
      console.log(JSON.parse(this.jobsList));
      this.jobsList = JSON.parse(this.jobsList);
      this.job = this.jobsList.find(job => +job.id === id);
      this.checkoutForm.setValue(this.job);
        // console.log(this.checkoutForm.value.companyName);
    }
  }

}
