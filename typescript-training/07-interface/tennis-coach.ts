import { Coach } from "./Coach";
export class TunisCoach implements Coach {
  getDailyWorkout(): string {
    return "Do somme tunis exercises";
  }
}
