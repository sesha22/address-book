// Never Ending  to Learn JavaScript and to drink JavaCofee
console.log();

const contacts = [
    {
        id: 1,
        name  : "Galuh Wasesa"
        age   : 30,
        email : "surat.sesha@gmail.com"
        phone : "+62-85646851825"
    },
    
]function listcontacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    console.log(`
 Name: ${contact.name}
 age: ${contact.age} year old
 Email: ${contact.email}
 address: ${contact.address}
 Phone: ${contact.phone}
 country: ${contact.country}
