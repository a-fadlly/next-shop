import Link from "next/link";

function NavBar() {
    const user = { name: "Alice" }
    return (
        <nav className="px-2 py-1 text-sm">
            <ul className="flex gap-2">
                <li className="text-lg font-extrabold">
                    <Link href="/">
                        Next Shop
                    </Link>
                </li>
                <li role="separator" className="flex-1" />
                {user ? (
                    <>
                        <li>{user.name}</li>
                        <Link href="/sign-in">
                            Sign Out
                        </Link>
                    </>

                ) : (
                    <li>
                        <Link href="/sign-in">
                            Sign In
                        </Link>
                    </li>
                )}

            </ul>
        </nav>
    );
}

export default NavBar;