// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"

  }
  else if (license == 'Mozilla') {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]"
  }
  else if (license == 'Apache') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
  }
  else if (license == 'Boost') {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
  }



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return "(https://opensource.org/licenses/MIT)"

  }
  else if (license == 'Mozilla') {
    return "(https://opensource.org/licenses/MPL-2.0)"
  }
  else if (license == 'Apache') {
    return "(https://opensource.org/licenses/Apache-2.0)"
  }
  else if (license == 'Boost') {
    return "(https://www.boost.org/LICENSE_1_0.txt)"
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'MIT') {
    return "The MIT license gives users express permission to reuse code for any purpose, sometimes even if code is part of proprietary software. As long as users include the original copy of the MIT license in their distribution, they can make any changes or modifications to the code to suit their own needs."

  }
  else if (license == 'Mozilla') {
    return "The Mozilla Public License (MPL) is a free and open-source software license developed and maintained by the Mozilla Foundation. ... As such, it allows the integration of MPL-licensed code into proprietary codebases, as long as the MPL-licensed components remain accessible under the terms of the MPL."
  }
  else if (license == 'Apache') {
    return "The Apache License is a permissive free software license written by the Apache Software Foundation (ASF). It allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties."
  }
  else if (license == 'Boost') {
    return "The Boost license permits the creation of derivative works for commercial or non-commercial use with no legal requirement to release your source code. Other differences include Boost not requiring reproduction of copyright messages for object code redistribution. The GPL is also much longer."
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.projectLicense)}


  ## Description 
  
  ${data.projectDescription}
  
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  Step-by-step description for installation.
  ${data.projectInstall}

  
  
  ## Usage 
  ${data.projectUsage}
  
  
  ## Credits
  List of collaboratos and links to their Github profiles,Third party links and tutorilas if followed  
  ${data.projectCredit1}

  ${data.projectCredit2}

  ${data.projectCredit3}

  
  
  ## License

  ${renderLicenseLink(data.projectLicense)}
  
 ${renderLicenseSection(data.projectLicense)}
  ---
  
  
  
  ## Contributing
  ${data.projectContribute}

  
  
  ## Tests
  
  ${data.projectTest}
  Go the extra mile and write tests for your application. Then provide examples on how to run them.
  
  ## Questions
  If any questions, concerns or need to reach out for additional question you can contact me through email or github.

  ${data.projectEmail}

  ${data.projectGithub}
`;
}

module.exports = generateMarkdown;
