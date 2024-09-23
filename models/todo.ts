export interface Todo {
    id: number;
    title: string;
    description: string | null;
    status: string;
    userId: number;
    createdAt: Date;
    updatedAt: Date | null;
}   