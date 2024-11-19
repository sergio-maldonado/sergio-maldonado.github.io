const ulResearchers = document.querySelector("#researchers")

class Researcher {
  constructor(nombre, img, link, body) {
    this.nombre = nombre
    this.img = img || "../assets/images/unknown_person.png"
    this.link = link
    this.body = body
  }
}

const researchers = [
  new Researcher(
    "Xinyang Ge, Ph.D.",
    "",
    "",
    [
      "Postdoctoral Researcher",
      "Experimental Fluid Mechanics",
      "University of Southampton, UK",
    ]
  ),
  new Researcher("Will Crawford-Jones", "", "", [
    "Ph.D. Student",
    "Particle-fluid interactions",
    "University of Southampton, UK",
  ]),
  new Researcher("Laura Coombs", "", "", [
    "Ph.D. Student",
    "Fluid-cell (algae) interactions",
    "University of Southampton, UK",
  ]),
  new Researcher("Nahum Banks", "../assets/images/Banks.png", "https://www.linkedin.com/in/nahum-banks-a31545252", [
    "Ph.D. Student",
    "Physics-informed AI",
    "University of Southampton, UK",
  ]),
  new Researcher("Nastja Vodopivec", "", "", [
    "Ph.D. Student",
    "Physics-informed AI",
    "University of Southampton, UK",
  ]),
  new Researcher("Henry Davies", "../assets/images/Davies.png", "https://www.linkedin.com/in/henry-davies-162aa2198/", [
    "MEng (Aero) Student",
    "Physics-informed AI",
    "University of Southampton, UK",
  ]),
  new Researcher("Fabián Hernández R.", "", "", [
    "BSc (Physics) Student",
    "CFD and Physics-informed AI",
    "Tecnológico de Monterrey, Mex.",
  ]),
  new Researcher("Iván A. Chávez R.", "", "", [
    "BSc (Physics) Student",
    "Physics-informed AI",
    "Tecnológico de Monterrey, Mex.",
  ]),
]

const stringResearchers = researchers
  .map(
    ({ nombre, img, link, body }) => `

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
        </li>
 
    `
  )
  .join("")

ulResearchers.innerHTML = stringResearchers
