//import Project from "./Project.js";

class Project {
  constructor(name, link, image) {
    this.name = name;
    this.url = link;
    this.image = image;
  }
}

// console.log("Starting");

const addToAllLinksBlankTargetAttribute = () => {
  let links = document.querySelectorAll("a.project-link");
  links = Array.prototype.slice.call(links);
  // console.log(links);
  links.forEach((link) => {
    link.setAttribute("target", "_blank");
  });
};

const addProjects = (container) => {
  // console.log(container);
  fetch(
    "https://portfolio-d9a8f-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
  )
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      // console.log(data);

      let concatenatedData = Object.keys(data);
      let values = Object.values(data);
      // console.log(concatenatedData);
      // console.log(values);

      concatenatedData = concatenatedData.map((project, index) => {
        let tempProject = new Project(
          project,
          values[index].link,
          values[index].image
        );
        return tempProject;
      });
      // console.log(concatenatedData);

      let divTest = document.getElementById("test");

      // divTest.innerHTML = JSON.stringify(concatenatedData);
      // get data and give them as an array

      let stringifiedData = JSON.stringify(concatenatedData);
      // console.log(stringifiedData);
      // console.log(typeof stringifiedData);
      concatenatedData = JSON.parse(stringifiedData);

      // get data and give them as an array
      //   concatenatedData = [
      //     {
      //       name: "JavaScript-Calculator",
      //       url: "https://github.com/Apostolos172/JavaScript-Calculator",
      //       image:
      //         "https://github.com/Apostolos172/JavaScript-Calculator/raw/master/screenshots/calculator.png?raw=true",
      //     },
      //     {
      //       name: "business-system",
      //       url: "https://github.com/Apostolos172/business-system",
      //       image:
      //         "https://github.com/Apostolos172/business-system/raw/b17275c03a03a92792e99e05fbeda2ad39ca8d83/My_System/screenshots/invoice.png?raw=true",
      //     },
      //     {
      //       name: "diavgeia-retrieval",
      //       url: "https://github.com/Apostolos172/diavgeia-retrieval",
      //       image:
      //         "https://github.com/Apostolos172/diavgeia-retrieval/raw/master/screenshots/example1.png?raw=true",
      //     },
      //     {
      //       name: "interesting-sites",
      //       url: "https://github.com/Apostolos172/interesting-sites",
      //       image:
      //         "https://github.com/Apostolos172/interesting-sites/raw/master/screenshots/Screenshot-Interesting-sites.png?raw=true",
      //     },
      //   ];

      concatenatedData.forEach((project, index) => {
        const div = document.createElement("div");
        div.classList.add("project-tile", "col-sm-5");

        const a = document.createElement("a");
        a.classList.add("project-link");
        a.href = project.url;

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.name;
        a.appendChild(img);

        div.appendChild(a);

        container.appendChild(div);

        addToAllLinksBlankTargetAttribute();
      });
    });
};

`
<div class="project-tile col-sm-6">
    <a href="https://github.com/Apostolos172/business-system" class="project-link"
    ><img
        src="https://github.com/Apostolos172/business-system/raw/b17275c03a03a92792e99e05fbeda2ad39ca8d83/My_System/screenshots/main.png?raw=true"
        alt="business-system"
    /></a>
</div>
`;

let projectsContainer = document.querySelector(".projects-row");
// console.log(projectsContainer);

addProjects(projectsContainer);

// addToAllLinksBlankTargetAttribute();
