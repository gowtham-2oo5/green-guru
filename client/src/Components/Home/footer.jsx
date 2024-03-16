const Footer = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow"></div>
        <div className="w-full py-5 text-center">
          <p className="text-gray-500">
            Made with ❤️ from{" "}
            <a
              className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
              href="https://kluniversity.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              KL University
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;