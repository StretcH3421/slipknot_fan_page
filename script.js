const albums = [
  {
    name: "We Are Not Your Kind",
    releaseDate: "August 9, 2019",
    year: 2019,
    image: "/images/01_Slipknot_WANYK-1.jpg",
  },
  {
    name: "Iowa",
    releaseDate: "August 28, 2001",
    year: 2001,
    image: "/images/06_Iowa.jpg",
  },
  {
    name: "The End, So Far",
    releaseDate: "September 30, 2022",
    year: 2022,
    image: "/images/TESF-web-1.jpg",
  },
  {
    name: "Vol. 3: The Subliminal Verses",
    releaseDate: "May 25, 2004",
    year: 2004,
    image: "/images/The_Subliminal_Verses_28Standard29-1.webp",
  },
  {
    name: ".5: The Gray Chapter",
    releaseDate: "October 21, 2014",
    year: 2014,
    image: "/images/03_5-the-gray-chapter.jpg",
  },
  {
    name: "Slipknot",
    releaseDate: "June 29, 1999",
    year: 1999,
    image: "/images/slipknot-1999.jpg",
  },
  {
    name: "All Hope Is Gone",
    releaseDate: "August 26, 2008",
    year: 2008,
    image: "/images/04_ahig.jpg",
  },
];
let events = [];

const gallery = document.querySelector(".galleryAlbum");
const filterAll = document.querySelector(".filterButtonAll");
const filterNewest = document.querySelector(".filterButtonNewest");
const filterOldest = document.querySelector(".filterButtonOldest");
const buttons = document.querySelectorAll(".filterBtn");
const eventContainer = document.querySelector(".eventContainer");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    events = data.events;
    console.log(events);
    showEvents(events);
  });

function showEvents(events) {
  eventContainer.innerHTML = "";
  events.forEach((key) => {
    eventContainer.innerHTML += `
    <div class="event">
      <div class="bottomEvent">
        <div class="eventNameDate"><h3 class="dateDay">${key.event.date.day}</h3>
              <h3 class="dateName">${key.event.name}</h3>
        </div>
              <h3 class="location">${key.event.location.city},${key.event.location.country}</h3>
              <button>Tickets</button>
      </div>
    </div>`;
  });
}

if (gallery) {
  showAlbums(albums);
  function showAlbums(album) {
    gallery.innerHTML = "";
    album.forEach((album) => {
      gallery.innerHTML += `
      <div class="albumCard">
  <img src="${album.image}" alt="${album.name}">
  <div class="albumHover"><h2>${album.name}</h2><p>${album.releaseDate}</p></div>
  </div>
  `;
    });
  }
}

function albumSort() {
  if (filterNewest.classList.contains("active")) {
    const sortedAlbums = [...albums].sort((a, b) => b.year - a.year);
    showAlbums(sortedAlbums);
  } else if (filterOldest.classList.contains("active")) {
    const sortedAlbums = [...albums].sort((a, b) => a.year - b.year);
    showAlbums(sortedAlbums);
  } else {
    showAlbums(albums);
  }
}
buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    event.target.classList.add("active");
    albumSort();
  });
});
const contactForm = document.querySelector("#formContact");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const surname = document.querySelector("#surname").value;
    const email = document.querySelector("#email").value;
    const man = document.querySelector("#man");
    const woman = document.querySelector("#woman");
    const agreement = document.querySelector("#agreement");
    const message = document.querySelector("#formMessage");

    if (name.trim() === "") {
      message.textContent = "Please enter your name.";
      return;
    }

    if (surname.trim() === "") {
      message.textContent = "Please enter your surname.";
      return;
    }

    if (email === "") {
      message.textContent = "Please enter your email.";
      return;
    }

    if (!email.includes("@")) {
      message.textContent = "Please enter a valid email.";
      return;
    }

    if (!man.checked && !woman.checked) {
      message.textContent = "Please select your gender.";
      return;
    }

    if (!agreement.checked) {
      message.textContent = "You must agree with the terms.";
      return;
    }

    message.textContent = "Form sent successfully!";
  });
}
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
