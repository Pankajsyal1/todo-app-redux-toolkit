import { createSlice, nanoid } from "@reduxjs/toolkit";
import { BookState } from "@/types/book/bookTypes";
import { BookStatus } from "@/enums";


const initialState: BookState = {
  items: [
    {
      id: nanoid(),
      title: "The Traveling Soul",
      price: "19.99",
      author: "Ananya Sharma",
      date: "15-05-1999",
      description: "A passionate traveler and aspiring writer with a love for books and nature.",
      published: BookStatus.published
    },
    {
      id: nanoid(),
      title: "The AI Revolution",
      price: "25.00",
      author: "Rohan Mehta",
      date: "02-11-1995",
      description: "Tech enthusiast with a background in software development and AI research.",
      published: BookStatus.published
    },
    {
      id: nanoid(),
      title: "The Fit Life",
      price: "15.50",
      author: "Neha Verma",
      date: "20-03-2000",
      description: "Fitness coach and lifestyle blogger focused on healthy living and motivation.",
      published: BookStatus.unPublish
    },
    {
      id: nanoid(),
      title: "The Creative Mind",
      price: "30.00",
      author: "Amit Joshi",
      date: "08-09-1998",
      description: "Graphic designer with a knack for creating visually compelling brand stories.",
     published: BookStatus.unPublish
    },
    {
      id: nanoid(),
      title: "Brewed Success",
      price: "22.50",
      author: "Sneha Kapoor",
      date: "27-07-1997",
      description: "Entrepreneur and coffee lover who runs a successful chain of eco-friendly cafes.",
      published: BookStatus.published
    }
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, price, author, date, description, published } = action.payload
      state.items.push({
        id: nanoid(), title, price, author, date, description, published 
      })
    },
    editBook: (state, action) => {
      const { title, price, author, date, description, published , id } = action.payload;
      state.items = state.items.map(item => item.id === id ? { ...item, title, price, author, date, description, published  } : item);

    },
    deleteBook: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleBook: (state, action) => {
      const { id, published } = action.payload
      state.items = state.items.map(item => item.id === id ? { ...item, published: published } : item)
    },
  }
})

export const {
  addBook,
  editBook,
  deleteBook,
  toggleBook,
} = bookSlice.actions

export default bookSlice.reducer