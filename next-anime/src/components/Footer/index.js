const Footer = () => {
    return (
        <>
            <footer className="bg-white rounded-lg shadow-neutral-950 shadow-2xl mb-2 mt-4 dark:bg-red-300">
                <div className="w-full mx-auto max-w-screen-xl p-10 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-100">
                        © 2024{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            FerFR
                        </a>
                        . CreativeTim.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-md font-medium text-gray-100 dark:text-gray-100 sm:mt-0">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}

export default Footer