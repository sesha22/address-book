const contacts = [
  {
    id: 1,
    name: "Galuh Wasesa",
    age: 36,
    email: "example.com",
    phone: "+62-1234-56789",
  },
  {
    id: 1,
    name: "Gading Muraya",
    age: 31,
    email: "example.com",
    phone: "+62-1234-56789",
  },
];

for (let index = 0; index < contacts.length; index++) {
  const contact = contacts[index];
  console.log(contact.name, contact.email);

  console.log(`Name: ${contact.name}
   Email : ${contact.email}
   Phone : ${contact.phone}
   `);
}
