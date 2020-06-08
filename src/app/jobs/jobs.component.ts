import {Component, OnInit, ViewChild} from '@angular/core';
import {JobsService} from '../services/jobs.service';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobList: any;
  job: any;
  @ViewChild('addJobModal') addJobModal: ModalComponent;
  @ViewChild('deleteJobModal') deleteJobModal: ModalComponent;

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getJobList().subscribe( item => this.jobList = item);
  }

  callModalAdd() {
    this.addJobModal.callOpenModal();
  }

  onAddNotify() {
    this.addJobModal.closeModal();
  }

  callModalDelete(job) {
    this.job = job;
    this.deleteJobModal.callOpenModal();
  }

  onDeleteNotify(event) {
    if (event === 'Delete') {
      this.jobList = this.jobList.filter(item => (item.id !== this.job.id));
    }
    this.deleteJobModal.closeModal();
  }
}
