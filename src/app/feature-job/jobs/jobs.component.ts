import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {JobsService} from '../../services/jobs.service';
import {ModalComponent} from '../../modal/modal.component';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, OnChanges {
  jobList: any;
  job: any;
  modalAction: any;

  @ViewChild('addEditJobModal') addEditJobModal: ModalComponent;
  @ViewChild('deleteJobModal') deleteJobModal: ModalComponent;

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getJobList().subscribe( (item) => {
      this.jobList = item;
      // console.log('Value in subscribe' + this.jobList);
    });
    // console.log('Value after subscribe' + this.jobList);
    console.log('parent ngOnInIt() called');
  }

  ngOnChanges(): void {
    // console.log('Job List in Parent' + this.jobList);
 //   this.jobList = JSON.parse(localStorage.getItem('myList'));
    console.log('parent ngOnChanges() called');
  }

  callModalAdd() {
    this.modalAction = 'Add';
    this.addEditJobModal.callOpenModal();
  }

  callModalEdit(job) {
    this.modalAction = 'Edit';
    this.job = job;
    this.addEditJobModal.callOpenModal();
  }

  onAddEditNotify() {
    this.addEditJobModal.closeModal();
  }

  callModalDelete(job) {
    this.job = job;
    this.deleteJobModal.callOpenModal();
  }

  onDeleteNotify(event) {
    if (event === 'Delete') {
      this.jobList = this.jobList.filter(item => (item.id !== this.job.id));
      localStorage.setItem('myList', JSON.stringify(this.jobList));
    }
    this.deleteJobModal.closeModal();
  }


}
