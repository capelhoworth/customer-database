const customerContainer = document.querySelector("#customers");
// grab the customer container

// console.log(customerContainer);

// loop through the customer objects and build html for each one
for (let customer of customers) {
  // create a card for the customer
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("small");

  let name = document.createElement("div");
  // create a div for name and apply the materialize class to it
  name.classList.add("card-title");
  let text = document.createTextNode(
    `${titleCase(customer.name.first)} ${titleCase(customer.name.last)}`
  );
  name.classList.add("name");
  name.appendChild(text);
  // add the name to the card

  // begin own work
  let thumb = document.createElement("div");
  thumb.classList.add("card-image");
  thumb.classList.add("circle");
  let pic = document.createElement("img");
  pic.src = customer.picture.thumbnail;
  thumb.appendChild(pic);

  let email = document.createElement("div");
  email.classList.add("email");
  email.innerText = `${customer.email}`;

  let address = document.createElement("div");
  address.classList.add("address");
  address.innerText = `${customer.location.street.number} ${
    customer.location.street.name
  }
    ${customer.location.city},${nameToAbbr(customer.location.state)} ${
    customer.location.postcode
  }`;

  let bday = document.createElement("div");
  bday.innerText = `${moment(customer.dob.date).format("ll")}`;

  let since = document.createElement("div");
  since.innerText = `${moment(customer.registered.date).format("ll")}`;

  card.appendChild(thumb);
  card.appendChild(name);
  card.appendChild(email);
  card.appendChild(address);
  card.appendChild(bday);
  card.appendChild(since);

  customerContainer.appendChild(card);
}

function titleCase(word) {
  let wordLow = word.toLowerCase();
  let finalWord = wordLow[0].toUpperCase() + wordLow.slice(1);
  return finalWord;
}
