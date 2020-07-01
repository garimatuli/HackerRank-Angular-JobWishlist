import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {JobsService} from '../../../services/jobsService/jobs.service';
import { Location } from '@angular/common';
import {Job} from '../../../model/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit, OnChanges {
  @Input() job: Job;
  @Input() modalAction: any;
  @Input() jobList: any;
  editJob: any;
  @Output() notify = new EventEmitter();
  @Output() newJobList = new EventEmitter<any[]>();
  checkoutForm;
  lengthList: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private jobService: JobsService,
              private location: Location,
  ) {
  }

  ngOnInit(): void {
    // console.log('child ngOnIt() called');
  }


  ngOnChanges(): void {
    // console.log('In child ngOnchanges()');

    this.checkoutForm = new FormGroup({
      id: new FormControl(''),
      companyName: new FormControl(''),
      jobTitle: new FormControl(''),
    });

    if (this.modalAction === 'Edit') {
      this.editJob = this.job;
      this.checkoutForm.setValue(this.editJob);
    }
  }


  /** onSubmit() - Both for Edit Job as well as Add Job */
  onSubmit(data) {
    // console.log(data);

    if (data.id) {
      this.jobService.updateJob(data).subscribe(() => {
        this.notify.emit('success');
      });
      // this.editJob = this.jobList.find(item => item.id === data.id);
      // this.editJob.companyName = data.companyName;
      // this.editJob.jobTitle = data.jobTitle;
      // this.job = this.editJob;
      // this.router.navigate(['/jobs']);
    } else {
      this.jobService.addJob(data).subscribe( () => {
        this.notify.emit('success');
      });
      // this.lengthList = this.jobList.length;
      // data.id = this.lengthList + 1;
      // this.jobList.push(data);
    }
    this.checkoutForm.reset();
  }
}
  // // to get job id from the route using route.snapshot.paramMap; when not using Edit via Modal
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

