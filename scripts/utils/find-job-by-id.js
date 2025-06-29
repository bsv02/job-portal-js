import {jobs} from '../../data/jobinfo.js';

export function findJobById(jobID){
   let selectedJob = null;
      for (const job of jobs){
        if (job.id == jobID){
          selectedJob = job;
          break;
        }
      }
    return selectedJob;
}