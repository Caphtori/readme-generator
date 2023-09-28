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
function generateMarkdown(data, licenseArray) {
  const license = ()=>{
    if (data.license === "None"){
      return "";
    } else{
      for (let i=0; i<licenseArray.length; i++){
        if (licenseArray[i].label===data.license){
          return licenseArray[i];
        };
      };
    };
  };
  

  const badge = renderLicenseBadge(license());
  // const link = renderLicenseLink(license());
  const licenseBundle = ()=>{
    if (data.license==="None"){
      return "None.";
    } else{
      return `${data.title} is covered under the ${license().label} license.
\nFor more information, please visit the ${license().label} [chooselicense page](${license().link}).`

    }
  }

  return `# ${data.title}
${badge}
  
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
${data.installation}

## Usage
${data.usage}

## License
${licenseBundle()}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, please contact me at:
\ngithub: ${data.github}
\nemail: ${data.email}
`;
}

module.exports = generateMarkdown;
