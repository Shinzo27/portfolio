import { Heart } from "lucide-react";

const Footer = () => {
  return (
<footer className="w-full bg-neutral-950 text-gray-200 py-4">
      <div className="container mx-auto px-4 font-melody">
        <p className="text-center text-sm flex items-center justify-center">
          Made with{" "}
          <Heart className="h-4 w-4 mx-1 inline-block text-red-500 fill-current" aria-hidden="true" />{" "}
          by{" "}
          <span className="font-semibold ml-1">Pratham Patel</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
