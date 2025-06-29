import {findJobById} from './utils/find-job-by-id.js'

export function renderAppliedJobs(){

  let appliedJobs = JSON.parse(localStorage.getItem('appliedJobs'))||[];
  let myApplicationsHTML = '';

  if(appliedJobs.length === 0){
    myApplicationsHTML = `
      <div class="no-applied-jobs-container">No Jobs Applied!!!</div>
    `;
  }
  
  appliedJobs.forEach((jobId)=>{
    const appliedJob = findJobById(jobId);
    myApplicationsHTML += `
    <div class="individual-job js-individual-job">
      <div class="first-line">
        <img class="logo" src="${appliedJob.companyDetails.companyLogo}">
        <div class="text-content">
          <div class="top-line">
            <p class="job-title"> ${appliedJob.jobDetails.jobTitle}</p>
            <button class="withdraw-application-button js-withdraw-application-button" data-job-id="${appliedJob.id}">Withdraw Application</button>
          </div>
            <p class="company-name">${appliedJob.companyDetails.companyName}</p>
        </div>
      </div>
      <div class="required-skills">
        Skill Set : ${appliedJob.requiredSkills}
      </div>
      <div class="third-line">
        <div class="job-type">${appliedJob.jobDetails.jobType} </div>
        <div class="experience">${appliedJob.jobDetails.experienceRequired}</div>
        <div class="location">${appliedJob.jobDetails.jobLocation}</div>
      </div>
    </div>
    `;
  });

  const appliedJobsContainer = document.querySelector('.js-jobs-container');
  appliedJobsContainer.innerHTML = myApplicationsHTML;

  const withdrawApplicationButttons = document.querySelectorAll('.js-withdraw-application-button');
  withdrawApplicationButttons.forEach((withdrawButton)=>{
    withdrawButton.addEventListener('click',()=>{
      const jobIdToRemove = withdrawButton.dataset.jobId;
      const updateAppliedJobs = appliedJobs.filter(jobId => jobId!==jobIdToRemove);
      localStorage.setItem('appliedJobs',JSON.stringify(updateAppliedJobs));
      renderAppliedJobs();
    });
  });

}

renderAppliedJobs();


