export interface Todo {
    id: number;
    title: string;
    description: string;
    date: string;
    status: 'pending' | 'completed';
}

export interface TodoState {
    items: Todo[];
    filter: 'ALL' | 'PENDING' | 'COMPLETED';
    sortOrder: 'DATE_DESC' | 'DATE_ASC' | 'ALPHA_ASC' | 'ALPHA_DESC';
}