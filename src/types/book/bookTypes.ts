import { BookStatus } from "@/enums";

export interface Book {
  id: string;
  title: string;
  price: string;
  author: string;
  date: string | Date;
  description: string;
  published: BookStatus.published | BookStatus.unPublish;
}

export interface BookState {
    items: Book[];
}




