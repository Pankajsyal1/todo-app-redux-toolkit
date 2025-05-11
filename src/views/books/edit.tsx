import BookForm from "@/components/features/books/BookForm";
import Section from "@/components/ui/section/Section";
import { RootState } from "@/store";
import { Book } from "@/types/book/bookTypes";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const books = useSelector((state: RootState) => state.books.items);

  const book = useMemo(() => {
    return books.find(book => book.id === id) as Book
  }, [id, books]);

  if (!book) {
    return <Section><p>Book not found</p></Section>;
  }

  return <Section>
    <BookForm book={book} title="Edit Book"/>
  </Section>
}

export default EditBook;
