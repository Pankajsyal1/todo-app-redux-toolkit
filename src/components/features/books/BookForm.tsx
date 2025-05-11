/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import React, { useState } from "react";
import FormGroup from "@/components/ui/form-components/form-group/FormGroup";
import Label from "@/components/ui/form-components/label/Label";
import Input from "@/components/ui/form-components/input/Input";
import Select from "@/components/ui/form-components/select/Select";
import { useDispatch } from "react-redux";
import { Toast } from "@/utils/plugins/toast";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import SectionHeading from "@/components/common/SectionHeading";
import { Book } from "@/types/book/bookTypes";
import { addBook, editBook } from "@/store/feature/book/bookSlice";
import { BookStatus } from "@/enums";

const INITIAL_STATE = {
  id: '',
  title: '',
  price: '',
  author: '',
  date: '',
  description: '',
  published: false
};

interface BookFormProps {
  book?: Book,
  title: string
}

const BookForm: React.FC<BookFormProps> = ({ book, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState(book ? {
    title: book.title,
    price: book.price,
    author: book.author,
    date: book.date,
    description: book.description,
    published: book.published,
  } : INITIAL_STATE) as any;

  // ****************** Handle Form Submission ******************
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValues, "inputValues");

    const payLoad = {
      ...inputValues,
    };

    if (book?.id) {
      console.log(book);
      dispatch(editBook({
        id: book.id,
        title: inputValues.title,
        price: inputValues.price,
        author: inputValues.author,
        date: inputValues.date,
        description: inputValues.description,
        published: inputValues.published,
      }));
      Toast("Book updated successfully.", "success");
    } else {
      dispatch(addBook(payLoad));
      Toast("Book added successfully.", "success");
    }

    setInputValues(INITIAL_STATE);

    navigate("/books")
  };

  // ****************** Handle Form Inputs ******************
  const handleChange = (type: string, value: string | number | any) => {
    setInputValues((prevValues: any) => ({
      ...prevValues,
      [type]: value,
    }));
  };

  return (
    <Card className="max-full md:w-1/2 mx-3 md:mx-auto">
      <SectionHeading onSort={() => console.log} onSearch={() => console.log} title={title} center />
      <form className="grid grid-cols-2 gap-3 md:gap-5" onSubmit={handleForm}>
        {/* Title */}
        <FormGroup className="cols-span-2">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            placeholder="Enter the title"
            id="title"
            name="title"
            value={inputValues.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </FormGroup>
        {/* Price */}
        <FormGroup className="cols-span-2">
          <Label htmlFor="price">Price</Label>
          <Input
            type="number"
            placeholder="Enter the price"
            id="price"
            name="price"
            value={inputValues.price}
            onChange={(e) => handleChange("price", e.target.value)}
            // @ts-ignore
            onKeyDown={(e) => {
              const allowedKeys = [
                "Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete",
              ];

              if (
                !/^[0-9]$/.test(e.key) &&
                !allowedKeys.includes(e.key)
              ) {
                e.preventDefault();
              }
            }}
          />

        </FormGroup>
        {/* Author Name */}
        <FormGroup>
          <Label htmlFor="author">Author Name</Label>
          <Input
            type="text"
            placeholder="Enter the author name"
            id="author"
            name="author"
            value={inputValues.author}
            onChange={(e) => handleChange("author", e.target.value)}
          />
        </FormGroup>
        {/* Publish Date */}
        <FormGroup>
          <Label htmlFor="date">Publish Date</Label>
          <Input
            type="date"
            placeholder="Enter the date"
            id="date"
            name="date"
            value={moment(inputValues.date,).format('YYYY-MM-DD')}
            onChange={(e) => handleChange("date", e.target.value)}
          />
        </FormGroup>
        {/* Status */}
        <FormGroup className="col-span-2">
          <Label htmlFor="published">Published</Label>
          <Select
            placeholder="Select any option"
            id="published"
            name="published"
            value={inputValues.published}
            options={[
              {
                value: BookStatus.published,
                label: BookStatus.published,
              },
              {
                value: BookStatus.unPublish,
                label: BookStatus.unPublish,
              },
            ]}
            onChange={(e) => handleChange("published", e.target.value)}
          ></Select>
        </FormGroup>
        {/* Description */}
        <FormGroup className="col-span-2">
          <Label htmlFor="description">Description</Label>
          <Input
            as="textarea"
            placeholder="Enter the description"
            id="description"
            name="description"
            value={inputValues.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
        </FormGroup>
        {/* Buttons */}
        <div className="flex gap-4 mt-5 col-span-2">
          <Link to=".." type="submit" className="btn btn-danger block w-full text-center">
            Cancel
          </Link>
          <Button block type="submit" className="btn btn-primary">
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default BookForm;
