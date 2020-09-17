import { GolfCoach } from "./golf-coach";
import { TunisCoach } from "./tennis-coach";
import { Coach } from "./Coach";
const arrayCoach: Coach[] = [];
const tunisCoach = new TunisCoach();
const golfCoach = new GolfCoach();
arrayCoach.push(tunisCoach);
arrayCoach.push(golfCoach);

arrayCoach.forEach((coach) => console.log(coach.getDailyWorkout()));
