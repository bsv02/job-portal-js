export function applyForTheJob(){
          
  const applyButtons = document.querySelectorAll('.js-apply-button');
  applyButtons.forEach((applyButton)=>{

      const appliedJobId=applyButton.dataset.jobId;
      let appliedJobs=JSON.parse(localStorage.getItem('appliedJobs'))||[];
      if(appliedJobs.includes(appliedJobId)){
        applyButton.innerHTML='Applied';
      }

      applyButton.addEventListener('click',()=>{
        appliedJobs=JSON.parse(localStorage.getItem('appliedJobs'))||[];
        if(!appliedJobs.includes(appliedJobId)){
          appliedJobs.push(appliedJobId);
          applyButton.innerHTML='Applied';
          localStorage.setItem('appliedJobs',JSON.stringify(appliedJobs));
        }      
      });
  });
}