interface WorkoutSet {
  id: number;
  set_number: number;
  reps?: number;
  weight?: number;
}

interface Book {
  id: number;
  title: string;
  author: string;
}

// interfaces.ts
interface User {
  id: number;
  name: string;
  email: string;
}

export type { WorkoutSet, Book, User };
