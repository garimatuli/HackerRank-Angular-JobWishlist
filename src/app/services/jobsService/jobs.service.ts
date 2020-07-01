import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Job} from '../../model/job.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  job: Job;
  private jobsUrl = 'api/jobs';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  /** GET jobs from the server */
  getJobList(): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl);
  }

  /** GET job by id.*/
  getJob(id: number): Observable<Job> {
    const url = `${this.jobsUrl}/${id}`;
    return this.http.get<Job>(url);
  }

  /** PUT: update the job on the server */
  updateJob(job: Job): Observable<any> {
    return this.http.put(this.jobsUrl, job, this.httpOptions);
  }

  /** POST: add a new job to the server */
  addJob(job: Job): Observable<Job> {
      return this.http.post<Job>(this.jobsUrl, job, this.httpOptions);
  }

  /** DELETE: delete the job from the server */
  deleteJob(job: Job | number): Observable<Job> {
    const id = typeof job === 'number' ? job : job.id;
    const url = `${this.jobsUrl}/${id}`;
    return this.http.delete<Job>(url, this.httpOptions);
  }
}

// getJobList() {
//   return this.http.get('/assets/jobs.json');
// }

// getJob(id: number) {
//   const url = `/assets/jobs.json/${id}`;
//   return this.http.get<Job>(url);
// }
