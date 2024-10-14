export interface Todo {
    id: number;
    title: string;
    description: string | null;
    status: string;
    userId: number;
    createdAt: string;
    updatedAt: string | null;
}   