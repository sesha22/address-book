const contacts = [
  {
    id: 1,
    name: "Galuh Wasesa",
    age: 36,
    email: "example.com",
    phone: "+62-1234-56789",
    address: "Kota",
  },
  {
    id: 2,
    name: "Gading Muraya",
    age: 31,
    email: "example.com",
    phone: "+62-1234-56789",
    address: "Kota",
  },
  {
    id: 3,
    name: "Bacharudin Jusuf Habibie",
    age: 89,
    email: "example.com",
    phone: "+62-1234-56789",
    address: "Kota",
  },
];

for (let index = 0; index < contacts.length; index++) {
  const contact = contacts[index];

  console.log(`
  Name : ${contact.name}
  Age : ${contact.age} year old
  Email : ${contact.email}
  Phone : ${contact.phone}
  Address : ${contact.address}
  `);
}
