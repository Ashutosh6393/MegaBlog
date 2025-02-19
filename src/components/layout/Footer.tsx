import { Button } from "@/components/ui/button";
import { SiBuymeacoffee } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full z-50 absolute py-5">
      <div className="max-w-7xl px-5 mx-auto w-full flex flex-col gap-4 justify-center items-center">
        <p className="text-gray-500">
          A project by
          <a
            target="_blank"
            href="https://github.com/Ashutosh6393"
            className="text-gray-700 underline font-semibold"
          >
            Ashutosh Verma
          </a>
        </p>
        <Button
          asChild
          variant="outline"
          className="text-gray-500 text-base hover:scale-105 transition-all hover:bg-white hover:text-gray-500"
        >
          <a target="_blank" href="https://buymeacoffee.com/ashutoshcodes">
            <SiBuymeacoffee className="text-black text-xl" />
            Buy me a coffee
          </a>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
