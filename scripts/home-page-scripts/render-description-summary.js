import {findJobById} from '../utils/find-job-by-id.js';
import {applyForTheJob} from '../utils/apply-for-the-job.js';

export function renderJobDescription(){
  let descriptionHTML='';

  const descriptionButton = 
      document.querySelectorAll('.js-description-button');
    descriptionButton.forEach((button) =>{
      button.addEventListener('click',()=>{
        const jobId = button.dataset.jobId;
        const selectedJob = findJobById(jobId);
        if (!selectedJob) return;
        descriptionHTML = `
          <div class="description">
            <div class="first-line">
              <img class="logo-in-description" 
                src="${selectedJob.companyDetails.companyLogo}">
              <div class="title-and-company-name-container">
                <p class="title-in-description">${selectedJob.jobDetails.jobTitle}</p>
                <p class="company-name-in-description">${selectedJob.companyDetails.companyName}</p>
              </div>
              <button class="apply-button js-apply-button"data-job-id="${selectedJob.id}">Apply</button>
              <button class="save-button js-save-button" data-job-id="${selectedJob.id}">Save</button>
            </div>
            <div class="remaining-details-in-description">
              <p class="description-titles">About the Company</p>
              <p class="about-the-company">
                ${selectedJob.companyDetails.companyName} is a leading organization known for innovation, collaboration, and growth. Join us to be part of a forward-thinking team that values creativity, ownership, and continuous learning.
              </p>
              <p class="description-titles">Job Details</p>
                <div class="details-container">
                  <div class="detail">
                    <span class="label">Job Type</span>
                    <span class="colon">:</span>
                    <span class="value">${selectedJob.jobDetails.jobType}</span>
                  </div>
                  <div class="detail">
                    <span class="label">Salary Range</span>
                    <span class="colon">:</span>
                    <span class="value">${selectedJob.jobDetails.salaryRange}</span>
                  </div>
                  <div class="detail">
                    <span class="label">Experience</span>
                    <span class="colon">:</span>
                    <span class="value">${selectedJob.jobDetails.experienceRequired}</span>
                  </div>
                  <div class="detail">
                    <span class="label">Educational Qualification</span>
                    <span class="colon">:</span>
                    <span class="value">${selectedJob.jobDetails.educationalQualification}</span>
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
        `;
        const descriptionContainer =
          document.querySelector('.js-description-container');
        descriptionContainer.innerHTML = descriptionHTML;
        descriptionContainer.classList.add('show');

        applyForTheJob();

        const saveButtons = document.querySelectorAll('.js-save-button');
        saveButtons.forEach((button)=>{
          
          const savedJobId=button.dataset.jobId;
          let savedJobs=JSON.parse(localStorage.getItem('savedJobs'))||[];
          if(savedJobs.includes(savedJobId)){
            button.innerHTML='saved';
          }

          button.addEventListener('click',()=>{
            savedJobs=JSON.parse(localStorage.getItem('savedJobs'))||[];
            if(!savedJobs.includes(savedJobId)){
              savedJobs.push(savedJobId);
              button.innerHTML='saved';
            }

            localStorage.setItem('savedJobs',JSON.stringify(savedJobs));

          });
          
        });

      })
    });

}
