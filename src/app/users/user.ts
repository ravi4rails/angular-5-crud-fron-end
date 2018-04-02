export class User {
  public id: number;
  public name: string;
  public email: string;
  public contact_number: string;
  public address: string;
  public gender: string;

  constructor(id: number, name: string, email: string, contact: string, address: string, gender: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.contact_number = contact;
    this.address = address;
    this.gender = gender;
  }
}
