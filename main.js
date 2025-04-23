const contacts = [
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

function displayContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
    🤵 Name : ${contact.name}
    🕯️ Age: ${contact.age} year old
    📧 Email : ${contact.email}
    📍 Address : ${contact.address}
    ☎️Phone : ${contact.phone}
    🚩Country : ${contact.country}
      `);
  }
}

function displayContacts() {
  console.log(contacts);
}

displayContacts();

function addContacts(name, age, email, phone, addres) {
  const lastContacts = contacts[contacts.length - 1];
  const lastId = lastContacts.id;
  const nextId = lastId + 1;

  contacts.push({
    Id: nextId,
    name,
    age,
    email,
    phone,
    address,
    country,
  });
}

addContacts(
  "sesha",
  36,
  "surat.sesha@gmail.com",
  "Blitar",
  "+6285646851825",
  "Indonesia"
);
