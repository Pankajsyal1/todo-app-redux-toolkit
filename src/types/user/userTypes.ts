export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    dob: Date | string;
    bio: string;
    status: 'ACTIVE' | 'INACTIVE';
}

export interface UserState {
    items: User[];
    filter: 'INACTIVE' | 'ACTIVE';
}




