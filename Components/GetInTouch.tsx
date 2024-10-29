import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const GetInTouch = () => {
  return (
    <div className="flex flex-col text-white pt-10">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 pt-4">
        <a href="https://github.com/Shinzo27" className="flex flex-col items-center group">
          <Github className="h-8 w-8 mb-2 group-hover:text-blue-400 transition-colors" />
          <span className="text-sm group-hover:text-blue-400 transition-colors">
            GitHub
          </span>
        </a>
        <a href="https://www.linkedin.com/in/prathamm27/" className="flex flex-col items-center group">
          <Linkedin className="h-8 w-8 mb-2 group-hover:text-blue-400 transition-colors" />
          <span className="text-sm group-hover:text-blue-400 transition-colors">
            LinkedIn
          </span>
        </a>
        <a href="https://x.com/Prathammmm27" className="flex flex-col items-center group">
          <Twitter className="h-8 w-8 mb-2 group-hover:text-blue-400 transition-colors" />
          <span className="text-sm group-hover:text-blue-400 transition-colors">
            Twitter
          </span>
        </a>
        <a href="mailto:prathampatel5553@gmail.com" className="flex flex-col items-center group">
          <Mail className="h-8 w-8 mb-2 group-hover:text-blue-400 transition-colors" />
          <span className="text-sm group-hover:text-blue-400 transition-colors">
            Email
          </span>
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;
