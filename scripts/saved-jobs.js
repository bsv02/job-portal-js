import {findJobById} from './utils/find-job-by-id.js';
import {applyForTheJob} from './utils/apply-for-the-job.js';


export function renderSavedJobs(){
  let savedJobs = JSON.parse(localStorage.getItem('savedJobs'))||[];
  let savedJobsHTML='';

  if(savedJobs.length===0){
    savedJobsHTML = `<div class="no-saved-jobs" style="display:flex;width:100%;justify-content:center;align-items:center;text-align:center;box-sizing:border-box;min-width:550px">No Jobs Saved!!!</div>`
    const savedJobsContainer = document.querySelector('.js-saved-jobs-wrapper');
    savedJobsContainer.innerHTML = savedJobsHTML;
  }
  
  savedJobs.forEach((jobId)=>{
  const savedJob = findJobById(jobId);
  savedJobsHTML +=`
      <div class="saved-job-container">
        <div class="description">
            <div class="first-line">
              <img class="logo-in-description" 
                src="${savedJob.companyDetails.companyLogo}">
              <div class="title-and-company-name-container">
                <p class="title-in-description">${savedJob.jobDetails.jobTitle}</p>
                <p class="company-name-in-description">${savedJob.companyDetails.companyName}</p>
              </div>
              <button class="apply-button js-apply-button" data-job-id="${savedJob.id}">Apply</button>
              <button class="unsave-button js-unsave-button"
              data-job-id="${savedJob.id}">Unsave</button>
            </div>
            <div class="remaining-details-in-description">
              <p class="description-titles">About the Company</p>
              <p class="about-the-company">
                ${savedJob.companyDetails.companyName} is a leading organization known for innovation, collaboration, and growth. Join us to be part of a forward-thinking team that values creativity, ownership, and continuous learning.
              </p>
              <p class="description-titles">Job Details</p>
              <div class="details-container">
                <div class="detail">
                  <span class="label">Job Type</span>
                  <span class="colon">:</span>
                  <span class="value">${savedJob.jobDetails.jobType}</span>
                </div>
                <div class="detail">
                  <span class="label">Salary Range</span>
                  <span class="colon">:</span>
                  <span class="value">${savedJob.jobDetails.salaryRange}</span>
                </div>
                <div class="detail">
                  <span class="label">Experience</span>
                  <span class="colon">:</span>
                  <span class="value">${savedJob.jobDetails.experienceRequired}</span>
                </div>
                <div class="detail">
                  <span class="label">Educational Qualification</span>
                  <span class="colon">:</span>
                  <span class="value">${savedJob.jobDetails.educationalQualification}</span>
                </div>
              </div>
              <p class="description-titles">Key Responsibilities</p>
              <div class="responsibility">
                <span class="bullet">&bull;</span>
                Manage and deliver on projects within specified timelines.
              </div>
              <div class="responsibility">
                <span class="bullet">&bull;</span>
                Analyze data and present actionable insights
              </div>
              <div class="responsibility">
                <span class="bullet">&bull;</span>
                Maintain documentation and ensure compliance with industry standards.
              </div>
            </div>
          </div>
      </div>
  `;
  
  });

  
  const savedJobsContainer = document.querySelector('.js-saved-jobs-wrapper');
  savedJobsContainer.innerHTML = savedJobsHTML;

  const unsaveButtons=document.querySelectorAll('.js-unsave-button');
  unsaveButtons.forEach((unsavebutton)=>{
    unsavebutton.addEventListener('click',()=>{
      let savedJobs=JSON.parse(localStorage.getItem('savedJobs'))|| [];
      console.log(savedJobs);
      const jobToRemove = unsavebutton.dataset.jobId;
      savedJobs=savedJobs.filter(id=>id !== jobToRemove);
      localStorage.setItem('savedJobs',JSON.stringify(savedJobs));
      console.log(savedJobs);

      renderSavedJobs();
    });

  });

  applyForTheJob();

}

renderSavedJobs();