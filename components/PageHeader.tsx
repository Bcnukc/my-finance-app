import Link from "next/link";
import { Theme } from "@/ hooks/useDarkMode";
import DarkModeToggle from "./DarkModeToggle";
import useServerDarkMode from "@/ hooks/useServerDarkMode";

interface PageHeaderProps {
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ className = "" }) => {
  const serverTheme = useServerDarkMode();

  const theme: Theme =
    serverTheme === "dark" || serverTheme === "light" ? serverTheme : "dark";

  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href="/dashboard"
        className="text-xl hover:underline underline-offeset-8 decoration-2"
      >
        Finance App
      </Link>
      <div className="flex items-center space-x-4">
        <DarkModeToggle defaultTheme={theme} />
        <div>User Dropdown</div>
      </div>
    </header>
  );
};

export default PageHeader;
