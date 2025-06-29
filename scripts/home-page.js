import {jobs} from '../data/jobinfo.js';
import {renderJobDescription} from './home-page-scripts/render-description-summary.js';
import {renderHeader} from './home-page-scripts/header.js';

renderHeader();

let homePageHTML = '';

export function renderJobsSummary(){

  jobs.forEach((job)=>{

      homePageHTML += `
          <div class="individual-job">
             <div class="first-line">
                <img class="logo" src="${job.companyDetails.companyLogo}">
                <div class="text-content">
                  <div class="top-line">
                    <p class="job-title"> ${job.jobDetails.jobTitle}</p>
                    <button  class="description-button js-description-button"
                        data-job-id ="${job.id}">Job Description</button>
                  </div>
                    <p class="company-name">${job.companyDetails.companyName}</p>
                </div>
              </div>
              <div class="required-skills">
                Skill Set : ${job.requiredSkills}
              </div>
              <div class="third-line">
                <div class="job-type"> ${job.jobDetails.jobType} </div>
                <div class="experience"> ${job.jobDetails.experienceRequired} </div>
                <div class="location">  ${job.jobDetails.jobLocation}</div>
              </div>
         </div>     
      `;
  });

  document.querySelector('.js-jobs-container').innerHTML = homePageHTML;
  const descriptionButtons = document.querySelectorAll('.js-description-button');
  descriptionButtons.forEach((descriptionButton)=>{
    descriptionButton.addEventListener('click',()=>{
      window.scrollTo({top:0,behaviour:'smooth'});
    });
  });

  renderJobDescription();

}

renderJobsSummary();






