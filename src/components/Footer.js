const Footer = () => {
  return (
    <footer
      className=" 
    bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow md:flex md:items-center md:justify-center md:p-6 bg-blue-50 dark:border-blue-150"
    >
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Suyash™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
