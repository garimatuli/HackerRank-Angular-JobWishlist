import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Job} from '../../model/job.model';

@Injectable({
  providedIn: 'root'
})

// https://angular.io/tutorial/toh-pt6

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const jobs = [
      {
        id: 1,
        companyName: 'Pathrise',
        jobTitle: 'Web Developer'
      },
      {
        id: 2,
        companyName: 'Airbnb',
        jobTitle: 'Web Developer'
      },
      {
        id: 3,
        companyName: 'Google',
        jobTitle: 'Software Engineer'
      },
      {
        id: 4,
        companyName: 'Facebook',
        jobTitle: 'Web Developer'
      }
    ];
    return {jobs};
  }

  /** Overrides the genId method to ensure that a job always has an id.
   * If the jobs array is empty, the method below returns the initial number (1).
   * if the jobs array is not empty, the method below returns the highest job id + 1.
   */
  genId(jobs: Job[]): number {
    return jobs.length > 0 ? Math.max(...jobs.map(job => job.id)) + 1 : 1;
  }
}

// https://angular.io/tutorial/toh-pt6
