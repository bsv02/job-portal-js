 
 export function renderHeader(){
    const headerHTML = `
      <div class="header-first-section">
          <div class="left-side">
            <img src="../icons/homepageLogos/suitcase-logo.png">
            <p class="title">JOB PORTAL</p>
          </div>
          <div class="empty-space">
          </div>
          <div class="right-side">
            <button class="applied-jobs js-applied-jobs-button">My Applications</button>
            <button class="saved-jobs js-saved-jobs-button">Saved Jobs</button>
          </div>
        </div>
        <div class="header-second-section">
          <div class="content">
            <h1 class="h1">Looking for a new opportunities?</h1>
            <h2 class="h2">Browse our latest job openings</h2>
          </div>
    </div>
    `;
  const headerJs = document.querySelector('.js-header');
  headerJs.innerHTML = headerHTML;

  const savedJobsButton = document.querySelector('.js-saved-jobs-button');
  savedJobsButton.addEventListener('click',()=>{
    window.location.href = '../../pages/saved-jobs-page.html';
  });

  const appliedJobsButton = document.querySelector('.js-applied-jobs-button');
  appliedJobsButton.addEventListener('click',()=>{
    window.location.href = '../../pages/my-applications-page.html'
  });
  
 }
 
 