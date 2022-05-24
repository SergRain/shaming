document.addEventListener("DOMContentLoaded", function (event) {
  const body = document.getElementById("search-body");
  const empty = document.getElementById("search-empty");
  const table = document.getElementById("search-table");
  const tableBody = document.getElementById("search-body");

  const nameInput = document.getElementById("search-name");
  const statusInput = document.getElementById("search-status");
  const industryInput = document.getElementById("search-industry");
  const arr = [];
  let offset = 0;
  const itemsPerPage = 7;
  let displayedItems = itemsPerPage;
  // let infinite_scroll_offset = 0

  const brand = (logo, name, industry, status, isToDisplay) => `
    <div class="table__item js-table-item" style="${
      isToDisplay ? "" : "display: none"
    }">
        <div class="table__logo table__cell" data-content="Logo">
          <img src="${
            logo ? logo : "https://place-hold.it/300x150"
          }" alt="logo">
        </div>
        <div class="table__text table__cell js-search-by-name" data-content="Name">
          ${name}
        </div>
        <div class="table__text table__cell js-search-by-industry" data-content="Industry">
          ${industry}
        </div>
        <div class="table__text table__cell js-search-by-status" data-content="Status">
          ${status}
        </div>
        <div class="table__button table__cell">
          <a href="#" class="button">View funding</a>
        </div>
      </div>
  `;

  function recursiveGetAllItems() {
    let index = 0;
    if (offset === undefined) {
      return arr.flat().forEach((item) => {
        if (
          item.fields.Logo[0].url !== undefined &&
          item.fields.Industry !== undefined
        ) {
          index++;
          body.insertAdjacentHTML(
            "beforeend",
            brand(
              item.fields.Logo[0].url,
              item.fields.Name,
              item.fields.Industry,
              item.fields.Status,
              index < displayedItems
            )
          );
        }
      });
    }
    fetch(
      `https://api.airtable.com/v0/appuRF8EsJqiqYYR0/Grid%20view?api_key=keyPyOgHCLHxxHwae&offset=${offset}`
    )
      .then((response) => response.json())
      .then((data) => {
        offset = data.offset;
        arr.push(data.records);
        recursiveGetAllItems();
      });
  }

  function isItemAccaptable(
    inputName,
    inputStatus,
    InputIndustry,
    name,
    status,
    industry
  ) {
    if (
      name.innerText.toLowerCase().indexOf(inputName) > -1 &&
      (inputStatus == "None" || inputStatus == status.innerText.trim()) &&
      (InputIndustry == "None" || InputIndustry == industry.innerText.trim())
    )
      return true;

    return false;
  }

  function filterItems() {
    const nameInputValue = nameInput.value;
    const statusInputValue = statusInput.value;
    const industryInputValue = industryInput.value;
    var currentDisplayedItems = 0;
    Array.from(body.querySelectorAll(".js-table-item")).forEach((item) => {
      const name = item.querySelector(".js-search-by-name");
      const status = item.querySelector(".js-search-by-status");
      const industry = item.querySelector(".js-search-by-industry");
      if (
        isItemAccaptable(
          nameInputValue,
          statusInputValue,
          industryInputValue,
          name,
          status,
          industry
        ) &&
        currentDisplayedItems < displayedItems
      ) {
        currentDisplayedItems++;
        item.removeAttribute("style");
      } else {
        item.setAttribute("style", "display: none");
      }
    });

    const numberOfElements = Array.from(
      body.querySelectorAll(".js-table-item")
    ).filter(function (node) {
      return node.style.display !== "none";
    }).length;

    if (numberOfElements == 0) {
      table.setAttribute("style", "display: none");
      empty.setAttribute("style", "display: block");
    } else {
      table.setAttribute("style", "display: block");
      empty.setAttribute("style", "display: none");
    }
  }

  try {
    recursiveGetAllItems();
    nameInput.addEventListener("input", (e) => {
      displayedItems = itemsPerPage;
      filterItems();
    });
    statusInput.addEventListener("change", (e) => {
      displayedItems = itemsPerPage;
      filterItems();
    });
    industryInput.addEventListener("change", (e) => {
      displayedItems = itemsPerPage;
      filterItems();
    });
  } catch (err) {
    console.log(err);
  }

  tableBody.addEventListener("scroll", function () {
    if (
      tableBody.scrollTop + tableBody.clientHeight >=
      tableBody.scrollHeight - 20
    ) {
      displayedItems += itemsPerPage;
      filterItems();
    }
  });

  document
    .getElementById("filter")
    .addEventListener("submit", (e) => e.preventDefault());

  const swiperLength =
    document.getElementsByClassName("war_info__slider").length;
  if (swiperLength > 0) {
    let swiper = new Swiper(".war_info__slider", {
      watchOverflow: true,
      loop: true,
      speed: 3500,
      autoplay: {
        delay: 0,
      },
      spaceBetween: 10,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        700: {
          slidesPerView: 2,
        },

        900: {
          slidesPerView: 3,
        },

        1280: {
          slidesPerView: 4,
        },
      },
    });
  }
});
