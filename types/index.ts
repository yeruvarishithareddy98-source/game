export interface User { id: string; email: string; name: string; created_at: string; };

export interface UserProgress { id: string; user_id: string; subject: string; level: number; score: number; attempts: number; completed: boolean; completed_at?: string; };

export interface Question { id: string; subject: string; level: number; type: 'crossword' | 'treasure_hunt' | 'code_sorting'; question_text: string; options?: string[]; correct_answer: string; hint: string; };

export interface Badge { id: string; user_id: string; subject: string; level: number; earned_at: string; };

export interface Certificate { id: string; user_id: string; subject: string; issued_at: string; pdf_url?: string; };

export const SUBJECTS = ['C', 'JAVA', 'PYTHON', 'R', 'DBMS'] as const;

export const LEVELS = [1, 2, 3, 4, 5] as const;

export const LEVEL_CONFIG = { 
  1: { name: 'Level 1: Crossword Puzzle', type: 'crossword', questions: 5, time_minutes: 10, description: '5 Crossword Puzzle Questions' }, 
  2: { name: 'Level 2: Treasure Hunt', type: 'treasure_hunt', questions: 10, time_minutes: 15, description: '10 Treasure Hunt Questions' }, 
  3: { name: 'Level 3: Sort Jumbled Code', type: 'code_sorting', questions: 5, time_minutes: 20, description: 'Sort Jumbled Code Lines' }, 
  4: { name: 'Level 4: Combined Challenge', type: 'combined', questions: 15, time_minutes: 30, description: '5 Crossword + 5 Treasure Hunt + 5 Code Sorting' }, 
  5: { name: 'Level 5: Master Challenge', type: 'master', questions: 25, time_minutes: 60, description: '5 Crossword + 10 Treasure Hunt + 10 Code Sorting' } 
} as const;