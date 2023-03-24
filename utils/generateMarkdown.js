
function renderLicenseBadge(license, color) {
  if(license == 'Other/None') { 
    return "";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-${color}.svg)`;
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache'){
    return `[Apache-2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'BSD'){
    return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license == 'Creative Commons'){
    return `[CC0](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license == 'GNU'){
    return `[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == 'MIT'){
    return `[${license}](https://opensource.org/licenses/MIT)`;
  } else (license == 'Other/None')
    return "";
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'Other/None') { 
    return ""
  } else { 
    return `## License
    This project is licensed under the ${license} license`;
  }
}

function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Instructions](#usage-instructions)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation Instructions

  ${data.installInstructions}

  ## Usage Instructions

  ${data.usageInfo}

  ## Contribution Guidelines

  ${data.contributionGuidelines}

  ## Test Instructions

  ${data.testInstructions}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ${renderLicenseBadge(data.license, data.color)}

  

  ## Questions

  If you have any other questions contact me through any of the below.
  - [Github](https://github.com/${data.githubUsername})
  - ${data.emailAddress}`;
}


// here we make the function generateMarkdown funtion
module.exports = generateMarkdown;
