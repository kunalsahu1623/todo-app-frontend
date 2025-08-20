import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-blue-300 py-4 shadow-md">
            <nav className="flex justify-center space-x-6">
                <Link to="/todo-add">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                        Add
                    </button>
                </Link>

                <Link to="/todo-show">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                        Show
                    </button>
                </Link>

                <Link to="/todo-done">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
                        Done
                    </button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;