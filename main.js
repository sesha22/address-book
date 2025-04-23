let allContacts = [
  {
    id: 1,
    name: "Galuh Wasesa",
    age: 36,
    email: "example.com",
    phone: "+62-1234-56789",
    address: "Blitar",
    country: "Indonesia",
  },
  {
    id: 2,
    name: "Gading Muraya",
    age: 31,
    email: "example.com",
    phone: "+62-1234-56789",
    address: "Madiun",
    country: "Indonesia",
  },
  {
    id: 3,
    name: "Bacharudin Jusuf Habibie",
    age: 89,
    email: "example.com",
    phone: "+62-1234-56789",
    address: "Pare-pare",
    country: "Jerman",
  },
];

// ----------------------------------------------------------------
// Functions
// ----------------------------------------------------------------

function displayContacts() {
  for (let index = 0; index < allContacts.length; index++) {
    const oneContact = allContacts[index];

    console.log(`
    🤵 Name : ${oneContact.name}
    🕯️ Age: ${oneContact.age} years old
    📧 Email : ${oneContact.email}
    📍 Address : ${oneContact.address}
    ☎️ Phone : ${oneContact.phone}
    🚩 Country : ${oneContact.country}
      `);
  }
}

function addContact(name, age, email, phone, address, country) {
  const lastOneContact = allContacts[allContacts.length - 1];
  const lastId = lastOneContact.id;
  const nextId = lastId + 1;

  allContacts.push({
    id: nextId,
    name,
    age,
    email,
    phone,
    address,
    country,
  });
}

// ----------------------------------------------------------------
// Main Program
// ----------------------------------------------------------------

addContact(
  "Sesha",
  36,
  "surat.sesha@gmail.com",
  "+6285646851825",
  "Blitar",
  "Indonesia"
);

displayContacts();
