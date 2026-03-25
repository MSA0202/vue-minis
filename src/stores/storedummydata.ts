// src/data/dummyData.ts
import type { WorkoutSet } from "./interfaces";
import type { Book } from "./interfaces";
import type { User } from "./interfaces";

export const dummyWorkoutSets: WorkoutSet[] = [
  { id: 1, set_number: 1, reps: 10, weight: 25 },
  { id: 2, set_number: 2, reps: 8, weight: 27.5 },
];

export const dummyBooks: Book[] = [
  { id: 1, title: "Atomic Habits", author: "Jam" },
  { id: 2, title: "Pragmatic Programmer", author: "Jon" },
];

export const dummyUsers: User[] = [
  { id: 1, name: "Jammy", email: "Jam@email.com" },
  { id: 2, name: "John", email: "Jon@email.com" },
];
