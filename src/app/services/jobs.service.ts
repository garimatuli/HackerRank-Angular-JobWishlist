import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Job} from '../model/job.model';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  job: Job;
  constructor(private http: HttpClient) { }

  getJobList() {
    return this.http.get('/assets/jobs.json');
  }

  // getJob(id: number) {
  //   const url = `/assets/jobs.json/${id}`;
  //   return this.http.get<Job>(url);
  // }

}
