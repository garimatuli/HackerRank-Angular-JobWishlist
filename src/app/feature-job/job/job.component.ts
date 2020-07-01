import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {JobsService} from '../../services/jobs.service';
import { Location } from '@angular/common';
import {Job} from '../../model/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  @Input() job: Job;
  editJob: any;
  @Input() jobList: any;
  @Output() notify = new EventEmitter();
  checkoutForm;
  lengthList: number;
  @Output() newJobList = new EventEmitter<any[]>();
  @Input() modalAction: any;
  localJob: any;

 constructor(private route: ActivatedRoute,
              private router: Router,
              private jobService: JobsService,
              private location: Location,
              ) {
  }

  ngOnInit(): void {

   console.log('child ngOnIt() called');
   // console.log('Modal Action is:::' + this.modalAction);

    // this.getJob(); // to get job id from the route using route.snapshot.paramMap
    // // console.log(this.checkoutForm);
  }


  ngOnChanges(): void {
   console.log('In child ngOnchanges()');
  // console.log('Modal Action is:::' + this.modalAction);

    this.checkoutForm = new FormGroup({
      id: new FormControl(''),
      companyName: new FormControl(''),
      jobTitle: new FormControl(''),
    });

   if (this.modalAction === 'Edit') {
      // To edit job, Making copy of job coming from parent first, then editing
     // this.editJob = Object.assign({}, this.job);
      this.checkoutForm.setValue(this.job);
   }
  }

  // ngDoCheck(): void {
  //  console.log('Child do check');
  // }

  onSubmit(data) {
   // console.log(data);

   if (data.id) {
      this.editJob = this.jobList.find(item => item.id === data.id);
      this.editJob.companyName = data.companyName;
      this.editJob.jobTitle = data.jobTitle;
     console.log('Edited job is ' + this.editJob);
    this.job = this.editJob;
   //  localStorage.setItem('myList', JSON.stringify(this.jobList));
     this.router.navigate(['/jobs']);
    } else {
      this.lengthList = this.jobList.length;
      data.id = this.lengthList + 1;
      // console.log(data);
      this.jobList.push(data);
    //  localStorage.setItem('myList', JSON.stringify(this.jobList));
      // this.newJobList.emit(this.jobList);
    }
    this.checkoutForm.reset();
  }

  // getJob(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   if (id) {
  //     this.jobsList = localStorage.getItem('myList');
  //     // console.log(JSON.parse(this.jobsList));
  //     this.jobsList = JSON.parse(this.jobsList);
  //     this.job = this.jobsList.find(job => +job.id === id);
  //     this.checkoutForm.setValue(this.job);
  //       // console.log(this.checkoutForm.value.companyName);
  //   }
  // }

}
