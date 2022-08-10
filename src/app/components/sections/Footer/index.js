function Footer() {
  return (
    <footer className="p-3 bg-white rounded-lg shadow md:px-6 md:py-6 dark:bg-gray-900">
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {new Date().getFullYear()}{' '}
        <a
          href="https://ksdevware.com"
          className="hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          KS Devware
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
