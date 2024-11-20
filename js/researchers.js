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
    "Xinyang Ge, Ph.D.",
    "../assets/images/Ge.png",
    "",
    [
      "Postdoctoral Researcher",
      "Experimental Fluid Mechanics",
      "University of Southampton, UK",
    ],
    []
  ),
  new Researcher(
    "Will Crawford-Jones",
    "../assets/images/WCJ.png",
    "",
    [
      "Ph.D. Student",
      "Particle-fluid interactions",
      "University of Southampton, UK",
    ],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/william-crawford-jones-88a5089a/")]
  ),
  new Researcher(
    "Laura Coombs",
    "../assets/images/Coombs.jpg",
    "",
    [
      "Ph.D. Student",
      "Fluid-cell (algae) interactions",
      "University of Southampton, UK",
    ],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/laura-coombs-125874162/")]
  ),
  new Researcher(
    "Nahum Banks",
    "../assets/images/Banks.png",
    "",
    ["Ph.D. Student", "Physics-informed AI", "University of Southampton, UK"],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/nahum-banks-a31545252")]
  ),
  new Researcher(
    "Nastja Vodopivec",
    "../assets/images/Vodopivec.png",
    "",
    ["Ph.D. Student", "Physics-informed AI", "University of Southampton, UK"],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/nastja-vodopivec-a3581206/")]
  ),
  new Researcher(
    "Henry Davies",
    "../assets/images/Davies.png",
    "",
    [
      "MEng (Aero) Student",
      "Physics-informed AI",
      "University of Southampton, UK",
    ],
    [new ResearcherSocial(
      "linkedin",
      "https://www.linkedin.com/in/henry-davies-162aa2198/")]
  ),
  new Researcher(
    "Fabián Hernández R.",
    "../assets/images/Hernandez.png",
    "",
    [
      "BSc (Physics) Student",
      "CFD and Physics-informed AI",
      "Tecnológico de Monterrey, Mex.",
    ],
    [
      new ResearcherSocial(
        "linkedin",
        "https://www.linkedin.com/in/fabian-hr2102/"),
      new ResearcherSocial(
        "github",
        "https://github.com/fabianhr21"
      ),
    ]
  ),
  new Researcher(
    "Iván A. Chávez R.",
    "../assets/images/Chavez.png",
    "",
    [
      "BSc (Physics) Student",
      "Physics-informed AI",
      "Tecnológico de Monterrey, Mex.",
    ],
    [
      new ResearcherSocial(
        "linkedin",
        "https://www.linkedin.com/in/ivan-alexis-chavez-ramirez-555413316"
      ),
      new ResearcherSocial("link", "http://www.ivanchavez.x10.mx/"),
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
