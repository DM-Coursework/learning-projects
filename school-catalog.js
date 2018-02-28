class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this.numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let randNumber = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randNumber];
  }

    set numberOfStudents (newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
      super(name);
      this._level = 'primary';
      this._numberOfStudents = numberOfStudents;
      this._pickupPolicy = pickupPolicy;
    }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name);
    this._level = 'high';
    this._numberOfStudents = numberOfStudents;
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hasnbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
const mckenny = new HighSchool('Mckenny', 1294, ['The Pirates']);

lorraineHansbury.quickFacts();
mckenny.drama();
