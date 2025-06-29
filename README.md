# 💼 Job Portal - JavaScript Project

A front-end job portal built using vanilla JavaScript, HTML, and CSS. This application displays 50 job listings and provides interactive functionality to view job descriptions, apply for jobs, and save jobs to review later.

---------

## 🚀 Features

✅ 50 Job Listings on the home page
📄 Job Description : Click on a job to view its full description
💾 Save Job: Save your favorite jobs to the Saved Jobs page
📝 Apply Now: Apply to a job and it gets added to the My Applications page
💻 Fully functional with vanilla JavaScript (no frameworks or libraries)

---------

## 📂 Project Structure

javascript-jobportal-project/
├── README.md
├── data/
│   └── jobinfo.js
├── icons/
│   ├── companyLogos/
│   └── homepageLogos/
├── pages/
│   ├── home-page.html
│   ├── my-applications-page.html
│   └── saved-jobs-page.html
├── scripts/
│   ├── home-page.js
│   ├── my-applications.js
│   ├── saved-jobs.js
│   ├── home-page-scripts/
│   │   ├── header.js
│   │   └── render-description-summary.js
│   └── utils/
│       ├── apply-for-the-job.js
│       └── find-job-by-id.js
├── styles/
│   ├── my-applications-page.css
│   ├── saved-jobs-page.css
│   └── home-page-styles/
│       ├── description-container.css
│       ├── header.css
│       ├── job-containers.css
│       └── overall-styles.css

--------

## 🛠 How It Works

On the home page , jobs are listed with a "Job Description" button.

When clicked, a description container appears beside the job, showing:

1.Full job details
2.Save button to add to the Saved Jobs list
3.Apply button to add to the Applications list

- Saved Jobs Page: Shows all jobs saved by the user.

- My Applications Page: Lists all jobs the user has applied to.

Data is stored temporarily (localStorage) so it persists between navigations during the session.

--------

## 📌 Requirements :

- A modern browser (Chrome, Firefox, Edge)
- No installation or backend required – open the HTML files directly

--------

## ✍️ Author : 
- Developed by Bhavya Sri Vardhini Chilukoti.

--------

## 📄 License :
This project is open source and free to use.