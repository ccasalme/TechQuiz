import type { Request, Response } from 'express';
import { IQuestion, Question } from '../models/Question.js';

// clearly logs and returns a set of random questions
export const getRandomQuestions = async (_req: Request, res: Response) => {
  try {
    const questions = await Question.aggregate<IQuestion>([
      { $sample: { size: 10 } },
      { $project: { __v: 0 } }
    ]);

    console.log('✅ Backend retrieved questions:', questions); // 👈 explicit logging here clearly
    res.status(200).json(questions);
  } catch (err: any) {
    console.error('❌ Backend Error:', err);
    res.status(500).json({ error: err.message });
  }
};
