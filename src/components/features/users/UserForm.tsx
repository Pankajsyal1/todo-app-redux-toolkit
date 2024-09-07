/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import React, { useState } from "react";
import { UserStatus } from "@/enums";
import FormGroup from "@/components/ui/form-components/form-group/FormGroup";
import Label from "@/components/ui/form-components/label/Label";
import Input from "@/components/ui/form-components/input/Input";
import Select from "@/components/ui/form-components/select/Select";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "@/store/feature/user/userSlice";
import { Toast } from "@/utils/plugins/toast";
import { Link, useNavigate } from "react-router-dom";
import { User } from "@/types/user/userTypes";
import moment from "moment";
import SectionHeading from "@/components/common/SectionHeading";

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  dob: "",
  bio: "",
  status: "",
};

interface UserFormProps {
  user?: User,
  title: string
}

const UserForm: React.FC<UserFormProps> = ({ user, title }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState(user ? {
    name: user.name,
    email: user.email,
    phone: user.phone,
    dob: user.dob,
    bio: user.bio,
    status: user.status,
  } : INITIAL_STATE) as any;

  // ****************** Handle Form Submission ******************
  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValues, "inputValues");

    const payLoad = {
      ...inputValues,
    };

    if (user?.id) {
      console.log(user);
      dispatch(editUser({
        id: user.id,
        name: inputValues.name,
        email: inputValues.email,
        phone: inputValues.phone,
        dob: inputValues.dob,
        bio: inputValues.bio,
        status: inputValues.status,
      }));
      Toast("User updated successfully.", "success");
    } else {
      dispatch(addUser(payLoad));
      Toast("User added successfully.", "success");
    }

    setInputValues(INITIAL_STATE);

    navigate("/users")
  };

  // ****************** Handle Form Inputs ******************
  const handleChange = (type: string, value: string | number | any) => {
    setInputValues((prevValues: any) => ({
      ...prevValues,
      [type]: value,
    }));
  };

  return (
    <Card className="w-1/2 mx-auto">
      <SectionHeading title={title} center/>
      <form className="grid md:grid-cols-2 gap-5" onSubmit={handleForm}>
        {/* Name */}
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            placeholder="Enter the name"
            id="name"
            name="name"
            value={inputValues.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </FormGroup>
        {/* Email */}
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Enter the email"
            id="email"
            name="email"
            value={inputValues.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </FormGroup>
        {/* Phone */}
        <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="number"
            placeholder="Enter the phone"
            id="phone"
            name="phone"
            value={inputValues.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </FormGroup>
        {/* Date of birth */}
        <FormGroup>
          <Label htmlFor="dob">Date of birth</Label>
          <Input
            type="date"
            placeholder="Enter the dob"
            id="dob"
            name="dob"
            value={moment(inputValues.dob,).format('YYYY-MM-DD')}
            onChange={(e) => handleChange("dob", e.target.value)}
          />
        </FormGroup>
        {/* Status */}
        <FormGroup className="col-span-2">
          <Label htmlFor="status">Status</Label>
          <Select
            placeholder="Select any option"
            id="status"
            name="status"
            value={inputValues.status}
            options={[
              {
                value: UserStatus.active,
                label: UserStatus.active,
              },
              {
                value: UserStatus.inactive,
                label: UserStatus.inactive,
              },
            ]}
            onChange={(e) => handleChange("status", e.target.value)}
          ></Select>
        </FormGroup>
        {/* Bio */}
        <FormGroup className="col-span-2">
          <Label htmlFor="bio">Bio</Label>
          <Input
            as="textarea"
            placeholder="Enter the bio"
            id="bio"
            name="bio"
            value={inputValues.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
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

export default UserForm;
