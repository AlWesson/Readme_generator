
const $date = new Date();

function renderLicenseBadge(license) {
  if(license !== "Unlicense") {
    return `![License](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }
  return "";
}

//function that returns the license link

function renderLicenseLink(license) {
  if(license !== "Unlicense"){
    return (`https://choosealicense.com/license/${license.toLowerCase()}`);
  }
  return "";
}

//function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "Unlicense"){
    return `## License
    Copyright (c) ${$date}. `;
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
