import React from "react";
//Todo will add separate skills and operational activities section so that I can update them using props
export default function Skills(props) {
  console.log(props.skills);
  return (
    <div className="projectBox">
      <h3>Skills</h3>
      Node JS| JavaScript| HTML | Bootstrap| MongoDB | Java| R | TypeScript | C | Python|
      CSS| React| GIT| SQL | CI/CD| JSON | AJAX| Express| cPanel | AS-IS | TO-BE
      | Gap Analysis | Agile |Data Analysis |Flask| SCRUM| Business Analysis
      <br></br>
      <br></br>
      Operational Activities: Operational Management | Compliance |Regulatory |
      Linux| Windows| Mac OS Tools: Visual Studio code | Bash| GitHub|
      Salesforce | Encompass| SQL Server | Excel | Word
    </div>
  );
}
