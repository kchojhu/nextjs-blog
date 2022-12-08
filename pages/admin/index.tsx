import { NextPage } from 'next';
import AdminNav from '../../components/common/AdminNav';
import {
  AiOutlineDashboard,
  AiOutlineContainer,
  AiOutlineTeam,
  AiOutlineMail,
  AiOutlineContacts
} from "react-icons/ai";

interface Props {}

const navItems = [
  {href:'/admin', icon: AiOutlineDashboard, label: 'Dashboard'},
  {href:'/admin/posts', icon: AiOutlineContainer, label: 'Posts'},
  {href:'/admin/users', icon: AiOutlineTeam, label: 'Users'},
  {href:'/admin/comments', icon: AiOutlineMail, label: 'Comments'},
  {href:'/admin/contacts', icon: AiOutlineContacts, label: 'Contacts'},
]

const Admin: NextPage<Props> = () => {
  return <div>
    <AdminNav navItems={navItems}/>
  </div>;
};

export default Admin;