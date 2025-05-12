import { useSelector } from "react-redux";
import { RootState } from "@/store";
import BookRow from "@/components/features/books/BookRow";
import { BookStatus } from "@/enums";

// Optional: define the book type if you want strict typing
type Book = {
  id: string;
  title: string;
  price: string;
  author: string;
  date: string | Date;
  description: string;
  published: BookStatus.published | BookStatus.unPublish;
};

const UserList = ({
  searchValue,
  sortValue,
}: {
  searchValue: string;
  sortValue: string;
}) => {
  const books = useSelector((state: RootState) => state.books.items as Book[]);

  // Helper function to safely parse DOB
  const parseDate = (dob: string | Date): Date => {
    if (dob instanceof Date) {
      return dob;
    }

    if (typeof dob === "string") {
      const [day, month, year] = dob.split("-");
      return new Date(`${year}-${month}-${day}`);
    }

    return new Date(); // fallback to now if invalid
  };

  // Filter logic
  let filteredTodo = searchValue
    ? books.filter((item) => {
        const query = searchValue.toLowerCase();
        return (
          item.title?.toLowerCase().includes(query) ||
          item.author?.toLowerCase().includes(query) ||
          item.price?.includes(searchValue) ||
          item.date?.toString().toLowerCase().includes(query) ||
           item.published.toString().includes(query)  
        );
      })
    : [...books]; // clone if no search

  // Sort logic
  if (sortValue === "Newest") {
    filteredTodo.sort(
      (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
    );
  } else if (sortValue === "Oldest") {
    filteredTodo.sort(
      (a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
    );
  }

  return (
<div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-2 border border-gray-200 overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-300 text-sm text-nowrap">
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="px-4 py-3 text-left font-semibold tracking-wide">S.No</th>
        <th className="px-4 py-3 text-left font-semibold tracking-wide">Title</th>
        <th className="px-4 py-3 text-left font-semibold tracking-wide">Author</th>
        <th className="px-4 py-3 text-left font-semibold tracking-wide">Price</th>
        <th className="px-4 py-3 text-left font-semibold tracking-wide">Publish Date</th>
        <th className="px-4 py-3 text-left font-semibold tracking-wide">Status</th>
        <th className="px-4 py-3 text-left font-semibold tracking-wide">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {filteredTodo.length > 0 ? (
        filteredTodo.map((book, index) => (
          <BookRow sr={index + 1} key={book.id} {...book} />
        ))
      ) : (
        <tr>
          <td colSpan={8} className="text-center px-4 py-4 text-gray-500">
            No book found...
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

  );
};

export default UserList;