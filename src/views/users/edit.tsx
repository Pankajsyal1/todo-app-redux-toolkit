import UserForm from "@/components/features/users/UserForm";
import Section from "@/components/ui/section/Section";
import { RootState } from "@/store";
import { User } from "@/types/user/userTypes";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.users.items);

  const user = useMemo(() => {
    return users.find(user => user.id === id) as User
  }, [id, users]);

  if (!user) {
    return <Section><p>User not found</p></Section>;
  }

  return <Section>
    <UserForm user={user} title="Edit User"/>
  </Section>
}

export default EditUser;
