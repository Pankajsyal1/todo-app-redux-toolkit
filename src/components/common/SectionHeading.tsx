import { Link } from 'react-router-dom'
import React, { ReactNode } from 'react'
import PlusFilled from '../icons/PlusFilled'
import Input from '../ui/form-components/input/Input'
import SearchOutlined from '../icons/SearchOutlined'
import FormGroup from '../ui/form-components/form-group/FormGroup'
import Select from '../ui/form-components/select/Select'

interface SectionHeadingProps {
  title: string;
  extra?: ReactNode;
  center?: boolean;
  onSearch: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  searchValue?: string | number | any;
  sortValue?: string;
  onSort: (value: string) => void;
}


const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  extra,
  center,
  searchValue,
  onSearch,
  sortValue,
  onSort
}) => {


  return (
    <div className={`flex flex-wrap lg:flex-nowrap px-3 md:px-0  ${center ? 'justify-center' : 'justify-between'} items-center mb-5`}>
      <h1 className={`text-lg sm:text-xl md:text-2xl font-extrabold uppercase ${center ? 'text-center' : ''}`}>{title}</h1>
      {extra &&
        <div className='flex gap-3 flex-wrap sm:flex-nowrap mx-3'>
          <FormGroup direction className='items-center'>
            <span className='-mr-9 relative text-gray-400'><SearchOutlined /></span>
            <Input
              placeholder='Search by name, email, phone and dob...'
              id='search'
              name='search'
              className='md:w-[350px] pl-10'
              onChange={onSearch}
              value={searchValue}
            />
          </FormGroup>
          {/* Sorting */}
          <Select
            placeholder="Sort by:"
            id="sort"
            name="sort"
            value={sortValue ?? ""}
            options={[
              { value: "Newest", label: "Newest" },
              { value: "Oldest", label: "Oldest" },
            ]}
            onChange={(e) => onSort(e.target.value)}
          />
          <Link to={"/books/add"} className="btn btn-primary flex gap-1 uppercase flex-shrink-0 items-center">
            <PlusFilled />
            <span>Add Book</span>
          </Link>
        </div>
      }
    </div>
  )
}
export default SectionHeading