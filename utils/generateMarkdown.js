// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if(license == 'Other/None') { 
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'Other/None') { 
    return "";
  } else {
    return `[text](https://linktoResource)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'Other/None') { 
    return ""
  } else { 
    return `## License
    This project is licensed under the ${license} license`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

## ${data.description};


${renderLicenseSection(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}



`;
}


// here we make the function generateMarkdown funtion
module.exports = generateMarkdown;
