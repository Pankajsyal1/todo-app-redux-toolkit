import { Link } from 'react-router-dom'
import React, { ReactNode } from 'react'
import PlusFilled from '../icons/PlusFilled'
import Button from '../ui/button/Button'
import SortFilled from '../icons/SortFilled'
import Input from '../ui/form-components/input/Input'
import SaveFilled from '../icons/SaveFilled'
import SearchOutlined from '../icons/SearchOutlined'
import FormGroup from '../ui/form-components/form-group/FormGroup'
import Select from '../ui/form-components/select/Select'

interface SectionHeadingProps {
  title: string,
  extra?: ReactNode,
  center?: boolean
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  extra,
  center
}) => {

  // ****************** Handle Sorting ******************
  const handleSort = () => {

  }

  return (
    <div className={`flex  ${center ? 'justify-center' : 'justify-between'} items-center mb-5`}>
      <h1 className={`text-2xl font-extrabold uppercase ${center ? 'text-center' : ''}`}>{title}</h1>
      {extra &&
        <div className='flex gap-3'>
          <FormGroup direction className='items-center'>
            <span className='-mr-9 relative text-gray-400'><SearchOutlined /></span>
            <Input
              placeholder='Search by name, email, phone and dob...'
              id='search'
              name='search'
              className='w-[400px] pl-10'
              onChange={(e) => console.log(e)}
              value=''
            />
          </FormGroup>
          {/* Sorting */}
          <Select
            placeholder="Sort by:"
            id="status"
            name="status"
            value={''}
            options={[
              {
                value: "Newest",
                label: "Newest",
              },
              {
                value: "Oldest",
                label: "Oldest",
              },
            ]}
            onChange={(e) => handleSort(e)}
          ></Select>
          <Button className="btn btn-primary flex gap-1 uppercase flex-shrink-0">
            <SortFilled />
            <span>Sort</span>
          </Button>
          <Link to={"/users/add"} className="btn btn-primary flex gap-1 uppercase flex-shrink-0">
            <PlusFilled />
            <span>Add User</span>
          </Link>
        </div>
      }
    </div>
  )
}
export default SectionHeading