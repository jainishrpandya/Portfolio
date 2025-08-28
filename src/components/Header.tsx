import Navbar from "./Navbar";


function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center">
                <h1 className="">
                    <a
                        href="/"
                        className="logo"
                    >
                        <img src="src/assets/images/logo.svg" width={40} height={40} alt="Jainish pandya"
                        />
                    </a>
                </h1>

                <div className="relative justify-self-center">
                    <button className="menu-btn md:hidden" >
                        <span className="material-symbols-rounded">
                            menu
                        </span>
                    </button>
                <Navbar />
                </div>

                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">Contact Me</a>
            </div>
        </header>
    )
}

export default Header;