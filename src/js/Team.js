export default class Team {
  constructor(...units) {
    this.members = units;
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть');
    }
    this.members.add(character);
  }

  addAll([...characters]) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return [...this.members];
  }

  [Symbol.iterator]() {
    const units = this.members;
    let current = 0;
    const last = units.length;

    return { // метод должен вернуть объект с методом next()
      next() {
        if (current < last) {
          const person = units[current];
          current += 1;
          return {
            done: false,
            value: person,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
