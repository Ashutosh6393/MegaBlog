import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const scrolled = useScroll(10);

  return (
    <nav
      className={`w-full fixed top-0 left-0  py-3 z-30 transition-all ${
        scrolled
          ? "border-b border-zinc-200 bg-white/50 backdrop-blur-md"
          : "bg-white/0"
      }`}
    >
      <div className="px-5 max-w-7xl w-full mx-auto  flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 lg:gap-4 text-zinc-800 text-lg lg:text-3xl">
          <img src="/logo-s.png" alt="better auth logo" />
          <Link to="/" className="text-lg lg:text-2xl font-medium">
            Chatterbox
          </Link>
        </div>
        <Button className="rounded-full font-normal text-xs md:text-sm lg:text-base">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
