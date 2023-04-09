// This gives me the timestamp for the license.
const Ndate = new Date();
const Nyear = Ndate.getFullYear();

// function to render the license badge onto the markdown file. 
function renderLicenseBadge(License) {
  if(License !== "Unlicense") {
    return `![License](https://img.shields.io/badge/license-${License}-yellow.svg)`;
  }
  return "";
}

//function that returns the license link

function renderLicenseLink(License) {
  if(License !== "Unlicense"){
    return `https://choosealicense.com/license/${License.toLowerCase()}`;
  }
  return "";
}


//function that returns the license section of README. If there is no license, return an empty string
function renderLicenseSection(License) {
  if(License !== "Unlicense"){
    return `## License
    Copyright (c) ${Nyear}. For more information about licenses, please follow this link ${renderLicenseBadge(License)}`;
  }
  return "";
}
// function to render Email input from questions in index.js.
function renderEmail(Email){
  return `${Email}`;
}
// function to render GitHub input from questions in index.js.
function renderGitHub(GitHub) {
  return `[${GitHub}](https://github.com/${GitHub})`;
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

  ## Installation

  ${data.Installation}
  
  ## Usage

  ${data.Usage}

  ## Contributions

  ${data.Contributions}

  ${renderLicenseSection(data.License)}

  ## Tests

  ${data.Tests}

  ## Questions 

  For questions regarding GitHub repositories from ${renderGitHub(data.GitHub)}, or any additional questions, you can reach me at ${renderEmail(data.Email)}`;
}

module.exports = generateMarkdown;
