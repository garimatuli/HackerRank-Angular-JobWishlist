import {Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {JobsService} from '../../../services/jobsService/jobs.service';
import {ModalComponent} from '../../../shared/modal/modal.component';


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
    this.getJobs();
    // console.log('Value after subscribe' + this.jobList);
    // console.log('parent ngOnInIt() called');
  }

  getJobs() {
    this.jobsService.getJobList().subscribe( (item) => {
      this.jobList = item;
      // console.log('Value in subscribe' + this.jobList);
    });
  }

  ngOnChanges(): void {
    // console.log('parent ngOnChanges() called');
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

  onAddEditNotify(event) {
    if (event === 'success') {
      this.getJobs();
      this.addEditJobModal.closeModal();
    }
  }

  callModalDelete(job) {
    this.job = job;
    this.deleteJobModal.callOpenModal();
  }

  onDeleteNotify(event) {
    if (event === 'Delete') {
      // this.jobList = this.jobList.filter(item => (item.id !== this.job.id));
      // localStorage.setItem('myList', JSON.stringify(this.jobList));
      this.jobsService.deleteJob(this.job).subscribe(() => {
        this.getJobs();
      });
    }
    this.deleteJobModal.closeModal();
  }

  /** if you click edit , edit something but close modal without submitting the edited value,
   *  then on opening the modal to edit again, you find this left over edited previous value instead of what is currently in db
   *  so we need to get & display list from database
   */
  closeModal() {
    this.getJobs();
  }

}
