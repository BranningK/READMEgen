// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  console.log('Wait for slow dev');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) { 
    return `${license}`
  } else { 

    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}

# ${data.description};

${renderLicenseBadge(data.license)}

`;
}


// here we make the function generateMarkdown funtion
module.exports = generateMarkdown;
