export default function Background() {
    return (
        <div
        className="hero min-h-screen bg-[url('../../public/hero.png')] bg-cover bg">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello Outfitess</h1>
            <p className="mb-5">
                Dapatkan Inspirasi OOTD Terbaik 
                Hanya di Sini
            </p>
            </div>
        </div>
        </div>
    );
}