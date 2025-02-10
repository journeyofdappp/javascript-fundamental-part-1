const data = {
  name: "John Doe",
  birthYear: 1991,
  job: "Senior Programmer",
  office: "United Tractors",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  hasDriverLicense: true,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.name} as a ${this.job} at ${
      this.office
    } and he is ${this.calcAge()} years old.`;
  },
};

console.log(data.getSummary());
