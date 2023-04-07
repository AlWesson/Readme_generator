
const $date = new Date();

function renderLicenseBadge(License) {
  if(License !== "Unlicense") {
    return `![License](https://img.shields.io/badge/license-${License}-yellow.svg)`;
  }
  return "";
}

//function that returns the license link

function renderLicenseLink(License) {
  if(License !== "Unlicense"){
    return (`https://choosealicense.com/license/${License.toLowerCase()}`);
  }
  return "";
}

//function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(License) {
  if(License !== "Unlicense"){
    return `## License
    Copyright (c) ${$date} ${Name}. For more information about licenses, please look at this link ${renderLicenseBadge(License)}`;
  }
  return "";
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ${renderLicenseBadge(data.License)}

  ## Description

  ${data.Description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [License](#License)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
`;
}

module.exports = generateMarkdown;
