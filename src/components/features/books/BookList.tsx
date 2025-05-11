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
    <div className="overflow-x-auto pb-3">
      <table className="min-w-full bg-white border border-gray-200 text-nowrap">
        <thead>
          <tr className="bg-gray-800">
            <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">S.No</td>
            <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Title</td>
            <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Author</td>
            <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Price</td>
            <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Publish Date</td>
            <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Description</td>
            <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Status</td>
            <td className="text-left p-4 border-b border-gray-200 text-white font-semibold uppercase">Actions</td>
          </tr>
        </thead>
        <tbody>
       { filteredTodo.length > 0 ?  <>
          {filteredTodo.map((user, index) => (
            <BookRow sr={index + 1} key={user.id} {...user} />
          ))}
          </>:
          
          <tr>
            <td colSpan={8}>
              <p className="text-center py-4">No book found....</p>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </div>
  );
};

export default UserList;