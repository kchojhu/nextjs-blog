import Link from "next/link";
import { FC } from "react";
import Logo from "./Logo";
import { IconType } from "react-icons";

interface Props {
  navItems: { label: string; icon: IconType; href: string }[];
}

const AdminNav: FC<Props> = ({ navItems = [] }) => {
  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark">
      <Link href="/admin" className="flex items-center space-x-2 p-3 mb-10">
        <Logo className="fill-highlight-light dark:fill-highlight-dark w-5 h-5" />
        <span className="text-highlight-light dark:fill-highlight-dark text-xl font-semibold">
          Admin
        </span>
      </Link>

      <div className="space-y-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center text-highlight-light dark:fill-highlight-dark p-3 hover:scale-[0.98] transition"
          >
            <item.icon size={24} />
            <span className="ml-2">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AdminNav;
