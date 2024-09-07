import SectionHeading from "@/components/common/SectionHeading";
import UserList from "@/components/features/users/UserList";
import Section from "@/components/ui/section/Section";

const UserApp: React.FC = () => {
  return (
    <Section>
      <SectionHeading title="User List App"  extra/>
      <UserList />
    </Section>
  );
};

export default UserApp;
