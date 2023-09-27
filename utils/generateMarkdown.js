// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.badge!==undefined){
    return license.badge;
  } else {
    return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);


  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Instsallation
  ${installation}

  ## Usage
  ${usage}

  ## License
  

  ## Contributing
  ${contributing}

  ## Tests
  ${tests}

  ## Questions
  For questions, please contact me at:
  github: ${github}
  email: ${email}
  `;
}

module.exports = generateMarkdown;
