const customerContainer = document.querySelector("#customers");
// grab the customer container

console.log(customerContainer);

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
    `${customer.name.first} ${customer.name.last}`
  );
  card.appendChild(text);
  // add the name to the card
  customerContainer.appendChild(card);
}
