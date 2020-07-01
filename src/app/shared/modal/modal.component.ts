import {Component, EventEmitter, Output, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  modalRef: BsModalRef | null;
  @ViewChild('template') template: TemplateRef<any>;

  @Output() closeEvent = new EventEmitter();

  constructor(private modalService: BsModalService) {}

  callOpenModal() {
    this.openModal(this.template);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }


  /** if you click edit , edit something but close modal without submitting the edited value,
   *  then on opening the modal to edit again, you find this left over edited previous value instead of what is currently in db
   *  so when close button is clicked on modal, on click event we call this function closeButtonClicked() where in
   *  first we close the modal by calling this.closeModal() & then we also need to
   *  emit an event from modal to parent component jobs to inform that close 'X' button on modal was clicked.
   *  Jobs component then call getJobs() to get fresh jobs from database which then on clicking edit is displayed in the form*/
  closeButtonClicked() {
    this.closeModal();
    this.closeEvent.emit();
  }

  closeModal() {
    if (!this.modalRef) {
      return;
    }

    this.modalRef.hide();
    this.modalRef = null;
  }
}
