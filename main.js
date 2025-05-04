let allContacts = [
  {
    id: 1,
    name: "Galuh Wasesa",
    age: 36,
    email: "sesha@example.com",
    phone: "+62-1234-56789",
    address: "Blitar",
    country: "Indonesia",
  },
  {
    id: 2,
    name: "Gading Muraya",
    age: 31,
    email: "gading@example.com",
    phone: "+62-1234-56789",
    address: "Madiun",
    country: "Indonesia",
  },
  {
    id: 3,
    name: "Bacharudin Jusuf Habibie",
    age: 89,
    email: "habibie@example.com",
    phone: "+62-1234-56789",
    address: "Pare-pare",
    country: "Jerman",
  },
];

// ------------------------------------
// Functions
// ------------------------------------

function displayContacts() {
  allContacts.forEach((contact) => {
    console.log(`
    🤵  Name: ${contact.name}
    🕯️  Agee: ${contact.age} years old
    📧 Email: ${contact.email}
    ☎️ Phone: ${contact.phone}
    📍  Address: ${contact.address}
    🚩 Country: ${contact.country}
      `);
  });
}

function addContact(newContactData) {
  const lastOneContact = allContacts[allContacts.length - 1];
  const lastId = lastOneContact.id;
  const nextId = lastId + 1;

  allContacts.push({
    id: nextId,
    ...newContactData
  });
}


function searchContacts(keyword) {
  const foundContacts = allContacts.filter((oneContact) => {
    if (oneContact.name.toLowerCase().include(keyword.toLowerCase())) {
      return oneContact;
    }
  });
  return foundContacts;
}
function deleteContact(id) {
  const updatedContacts = allContacts.filter((contact) => contact.id !== id);
  allContacts = updatedContacts;
}
function updateContact(id, newContactData) {
  const updatedContacts = allContacts.map((contact) => {
    if (contact.id === id) {
      return {
        ...contact,
        ...newContactData,
      };
    } else {
      return contact;
    }
  });
  allContacts = updateAllContact;
}

function renderContact ( ) {
  const allContactsListElement = document.getElementById("all-contcts");

  allContactsListElement.innerHTML =allContacts
    .map((oneContact) => {
      retun `<li>
      <h2>${oneContact.name}</h2>
      <p>${oneContact.age} years old</p>
      <p>${oneContact.email}</p>
      <p>${oneContact.phone}</p>
      <p>${oneContact.address}</p>
      </li>`;
    })
      .join("")
    }

    const contactFormElement = document.getElementById("contact-form");
      event.preventDefaul();

      const formData = new FormData(contacFormElement);

      const newContactFormData = {
        name : String(formData.get("name")),
        age : Number(formData.get("age")),
        email :String(formData.get("email")),
        phone : String(formData.get("phone")),
        address :String(formData.get("address")),
        
      }
}

// addContact(
//   "Sesha",
//   36,
//   "surat.sesha@gmail.com",
//   "+6285646851825",
//   "Blitar",
//   "Indonesia"
// );

// displayContacts();
