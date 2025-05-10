import SectionHeading from "@/components/common/SectionHeading";
import UserList from "@/components/features/users/UserList";
import Section from "@/components/ui/section/Section";
import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";

const UserApp: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const debouncedSearchValue = useDebounce(searchValue, 300);
 const [sortValue, setSortValue] = useState<string>("Newest");

  const handleSort = (value: string) => {
    setSortValue(value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearchValue(e.target.value);
    }
  };
  return (
    <Section>
      <SectionHeading
        searchValue={searchValue}
        sortValue={sortValue}
        onSearch={handleSearch}
        onSort={handleSort}
        title="User List App"
        extra
      />
      <div className="mx-3">
        <UserList searchValue={debouncedSearchValue} sortValue={sortValue}/>
      </div>
    </Section>
  );
};

export default UserApp;
