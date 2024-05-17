interface Player {
  name: string;
  team: string;
  jerseyNumber: number;
  isCaptain: boolean;
  play(): void;
  practice(): void;
}

class Cricketer implements Player {
  name: string;
  team: string;
  jerseyNumber: number;
  isCaptain: boolean;

  constructor(name: string, team: string, jerseyNumber: number, isCaptain: boolean) {
    this.name = name;
    this.team = team;
    this.jerseyNumber = jerseyNumber;
    this.isCaptain = isCaptain;
  }

  play(): void {
    console.log(`${this.name} is playing on the field.`);
  }

  practice(): void {
    console.log(`${this.name} is practicing in the nets.`);
  }

  // Additional methods specific to a Cricketer
  bat(): void {
    console.log(`${this.name} is batting now.`);
  }

  bowl(): void {
    console.log(`${this.name} is bowling now.`);
  }

  field(): void {
    console.log(`${this.name} is fielding at the moment.`);
  }
}

// Usage
const cricketer = new Cricketer('Virat Kohli', 'India', 18, true);
cricketer.play(); // Virat Kohli is playing on the field.
cricketer.practice(); // Virat Kohli is practicing in the nets.
cricketer.bat(); // Virat Kohli is batting now.
cricketer.bowl(); // Virat Kohli is bowling now.
cricketer.field(); // Virat Kohli is fielding at the moment.
