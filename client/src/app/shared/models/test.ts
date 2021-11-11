export interface Test {
    id?: string;
    courseId: string;
    name: string;
    description: string;
    allocatedTime: number;
    deadline: Date;
    totalQuestions: number;
    maxScore: number;
    maxAttempt: number;
}