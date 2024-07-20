export default function Navbar() {
    return (
            <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">Outfitess</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
            <li><a>Boy Outfit</a></li>
            <li>
                <details>
                <summary>Category</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                    <li><a>Ngampus</a></li>
                    <li><a>Skena</a></li>
                    <li><a>Casual</a></li>
                    <li><a>Starboy</a></li>
                    <li><a>Coming Soon</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
        </div>
    );
}     