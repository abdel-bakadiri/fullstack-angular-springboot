import { Coach } from "./Coach";
export class GolfCoach implements Coach {
  getDailyWorkout(): string {
    return "Do some golf exercises";
  }
}
