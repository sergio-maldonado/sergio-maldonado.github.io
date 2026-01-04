class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    // const shadow = this.attachShadow({ mode: "open" })

    const links = [
      { nombre: "Home", link: "./" },
      { nombre: "People", link: "./people.html" },
      { nombre: "Research", link: "./research.html" },
      { nombre: "Publications", link: "./publications.html" },
      { nombre: "Teaching", link: "./teaching.html" },
      { nombre: "Join us", link: "./join-us.html" },
    ]

    const wrapper = document.createElement("header")
    wrapper.classList.add("bg-1", "py-3")
    wrapper.innerHTML = `
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <h1 class="text-white fs-4">
            Sergio Maldonado
          </h1>
          <small class="text-white fs-6">
            Environmental Fluid Mechanics
          </small>
        </div>
        <nav class="d-none d-lg-block">
          <ul class="d-flex list-unstyled mb-0">
            ${links
              .map(
                ({ nombre, link }) => `
              <li>
                <a href="${link}" class="text-decoration-none text-white me-3">
                  ${nombre}
                </a>
              </li> 
            `
              )
              .join("")}
          </ul>
        </nav>
      <i id="menu-burger" class="bi bi-list text-white fs-3 d-lg-none ms-2" role="button" tabindex="0"></i>
      </div>
      <div id="menu-cel" class="position-fixed top-0 left-0 w-75 h-100 bg-1 p-3 d-none z-3">
        <nav>
          <ul class="p-0 m-0">
            ${links
              .map(
                ({ nombre, link }) => `
            <li class="mb-3">
              <a href="${link}" class="text-decoration-none text-white fs-3">
                ${nombre}
              </a>
            </li>
          `
              )
              .join("")}
          </ul>
        </nav>
      </div>
    `
    // shadow.appendChild(wrapper)
    const btn = wrapper.querySelector("#menu-burger")
    const menuCel = wrapper.querySelector("#menu-cel")
    btn.onclick = () => {
      const hasDnone = menuCel.classList.contains("d-none")
      if (hasDnone) {
        menuCel.classList.remove("d-none")
      } else {
        menuCel.classList.add("d-none")
      }
    }
    this.appendChild(wrapper)
  }
}

customElements.define("yoyo-header", Header)
