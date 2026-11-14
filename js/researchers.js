const ulResearchers = document.querySelector("#researchers");

class Researcher {
  constructor(nombre, img, link, body, social) {
    this.nombre = nombre;
    this.img = img || "../assets/images/unknown_person.png";
    this.link = link;
    this.body = body;
    this.social = social;
  }
}

class ResearcherSocial {
  constructor(nombre, link) {
    this.nombre = nombre;
    this.link = link;
  }
}

const researchers = [
  
  new Researcher(
    "Laura Coombs",
    "../assets/images/Coombs.jpg",
    "",
    [
      "Ph.D. Student",
      "Fluid-cell (algae) interactions",
    ],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/laura-coombs-125874162/")]
  ),

  new Researcher(
    "Nahum Banks",
    "../assets/images/Banks.png",
    "",
    ["Ph.D. Student", "Physics-informed AI"],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/nahum-banks-a31545252")]
  ),

  new Researcher(
    "Nastja Vodopivec",
    "../assets/images/Vodopivec.png",
    "",
    ["Ph.D. Student", "PINNS for Fluid Mechanics"],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/nastja-vodopivec-a3581206/")]
  ),

  new Researcher(
    "Anugerah Tiffanyputri",
    "../assets/images/Anu.png",
    "",
    [
      "Ph.D. Student",
      "Experimental Fluid Mechanics",
    ],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/anugerah-tiffanyputri/")]
  ),

  new Researcher(
    "Sebastian Gutiérrez",
    "../assets/images/sebastian_gtz.jpeg",
    "",
    [
      "Ph.D. Student",
      "PINNs and Experimental Physics",
    ],
    [
      new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/sgb130802/"),
      new ResearcherSocial(
        "github",
        "https://github.com/barra9408"
      )
    ]
  ),

  new Researcher(
    "Shukron Najmiddinova",
    "../assets/images/shukron.jpg",
    "",
    [
      "MEng (Civil) Student",
      "Coastal Engineering & PINNs",
    ],
    [
      new ResearcherSocial(
        "linkedin",
        "https://www.linkedin.com/in/shukronakhon-najmiddinova-84774a335/"
      )
    ]
  ),

  new Researcher(
    "Timurhan Bora Yalkılday",
    "../assets/images/bora.jpg",
    "",
    [
      "MEng (Mechanical) Student",
      "Experimental Fluid Mechanics",
    ],
    [
      new ResearcherSocial(
        "linkedin",
        "https://www.linkedin.com/in/timurhan-bora-yalk%C4%B1lday-7513732a6/"
      )
    ]
  ),

  new Researcher(
    "Andrew Creese",
    "../assets/images/Creese.png",
    "",
    [
      "MEng (Civil) Student",
      "Experimental Fluid Mechanics",
    ],
    [
      new ResearcherSocial(
        "linkedin",
        "https://www.linkedin.com/in/andrew-creese-30b60b316/"
      )
    ]
  ),

  new Researcher(
    "Ximena Padrón",
    "../assets/images/unknown_person.png",
    "",
    [
      "Visiting Research Student",
      "Experimental Fluid Mechanics",
      "Tecnológico de Monterrey, Mexico",
    ],
    [
      // new ResearcherSocial(
      //   "linkedin",
      //   "https://www.linkedin.com/in/eric-fdz03-/"
      // )
    ]
  ),

  new Researcher(
    "Eric Fernández",
    "../assets/images/Fernandez.jpg",
    "",
    [
      "Research Assistant",
      "Physics-informed AI & optics in fluids",
      "Tecnológico de Monterrey, Mexico",
    ],
    [
      new ResearcherSocial(
        "linkedin",
        "https://www.linkedin.com/in/eric-fdz03-/"
      )
    ]
  ),


];

const socialToHtmlString = (socialArray) => {
  let socialString = "";

  if (socialArray.length) {
    socialString += `
      <nav>
        <ul class="d-flex align-items-center list-unstyled mb-0">
    `;

    for (const social of socialArray) {
      switch (social.nombre) {
        case "github":
          socialString += `
            <li class="me-3">
              <a
                class="text-decoration-none"
                href="${social.link}"
                target="_blank"
                aria-label="github"
              >
                <i class="bi bi-github color1 fs-4"></i>
              </a>
            </li>
          `;
          break;
        case "google-scholar":
          socialString += `
            <li class="me-3">
              <a
                class="text-decoration-none"
                href="${social.link}"
                target="_blank"
                aria-label="google scholar"
              >
                <i class="bi bi-google color1 fs-4"></i>
              </a>
            </li>
          `;
          break;
        case "link":
          socialString += `
            <li class="me-3">
              <a
                class="text-decoration-none"
                href="${social.link}"
                target="_blank"
                aria-label="link"
              >
                <i class="bi bi-link-45deg color1 fs-4"></i>
              </a>
            </li>
          `;
          break;
        case "research-gate":
          socialString += `
            <li class="me-3">
              <a
                class="text-decoration-none"
                href="${social.link}"
                target="_blank"
                aria-label="research gate"
              >
                <span class="color1 fs-4">RG</span>
              </a>
            </li>
          `;
          break;
        case "mail":
          socialString += `
            <li class="me-3">
              <a
                href="mailto:${social.link}"
                target="_blank"
                class="text-decoration-none"
                aria-label="send an email"
              >
                <i class="bi bi-envelope color1 fs-4"></i>
              </a>
            </li>
          `;
          break;
        default:
          break;
        case "linkedin":
          socialString += `
            <li class="me-3">
              <a
                class="text-decoration-none"
                href="${social.link}"
                target="_blank"
                aria-label="linkedin"
              >
                <i class="bi bi-linkedin color1 fs-4"></i>
              </a>
            </li>
          `;
          break;
      }
    }

    socialString += `
        </ul>
      </nav>
    `;
  }

  return socialString;
};

const stringResearchers = researchers
  .map(
    ({ nombre, img, link, body, social }) => `
        <li class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-5">
          <img src="${img}" alt="" class="w-75 rounded-circle mb-3 d-block mx-auto" />
          ${
            !link
              ? `
                <span class="d-block fw-bold fs-5 text-center mb-3 color1">${nombre}</span>
              `
              : `
                <a
                  class="d-block fw-bold fs-5 text-center mb-3 color1"
                  href="${link}"
                  target="_blank"  
                >${nombre}</a>
              `
          }
          ${body.map((p) => `<p class="mb-0">${p}</p>`).join("")}
          ${socialToHtmlString(social)}
        </li>
      `
  )
  .join("");

ulResearchers.innerHTML = stringResearchers;

// Old stuff:
// new Researcher(
  //   "Xinyang Ge, Ph.D.",
  //   "../assets/images/Ge.png",
  //   "",
  //   [
  //     "Postdoctoral Researcher",
  //     "Experimental Fluid Mechanics",
  //     "University of Southampton, UK",
  //   ],
  //   []
  // ),

  // new Researcher(
  //   "Henry Davies",
  //   "../assets/images/Davies.png",
  //   "",
  //   [
  //     "MEng (Aerospace) Student",
  //     "Physics-informed AI",
  //     "University of Southampton, UK",
  //   ],
  //   [new ResearcherSocial(
  //     "linkedin",
  //     "https://www.linkedin.com/in/henry-davies-162aa2198/")]
  // ),
  // new Researcher(
  //   "Rohan Reddy",
  //   "../assets/images/Reddy.jpg",
  //   "",
  //   [
  //     "MEng (Aerospace) Student",
  //     "CFD (particle-flow interactions)",
  //     "University of Southampton, UK",
  //   ],
  //   [new ResearcherSocial(
  //     "linkedin",
  //     "https://www.linkedin.com/in/rohanpreddy")]
  // )

  // new Researcher(
  //   "Iván A. Chávez R.",
  //   "../assets/images/Chavez.png",
  //   "",
  //   [
  //     "BSc (Physics) Student",
  //     "Physics-informed AI",
  //     "Tecnológico de Monterrey, Mex.",
  //   ],
  //   [
  //     new ResearcherSocial(
  //       "linkedin",
  //       "https://www.linkedin.com/in/ivan-alexis-chavez-ramirez-555413316"
  //     ),
  //     new ResearcherSocial("link", "http://www.ivanchavez.x10.mx/"),
  //   ]
  // ),

  // new Researcher(
  //   "Carlos Colchero",
  //   "../assets/images/Colchero.jpeg",
  //   "",
  //   [
  //     "BSc (Physics) Student",
  //     "Physics-informed AI",
  //     "Tecnológico de Monterrey, Mex.",
  //   ],
  //   [
  //     new ResearcherSocial(
  //       "linkedin",
  //       "https://www.linkedin.com/in/carlos-colchero-8199a5265/"),
  //     new ResearcherSocial(
  //       "github",
  //       "https://koopmancolch.github.io/OPGroup/members/carlos"
  //     ),
  //   ]
  // ),  