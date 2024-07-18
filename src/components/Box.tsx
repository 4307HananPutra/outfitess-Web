import Image from "next/image";
import Product from "../../public/Product.png"

export default function Box() {
    return (
        <div className="hero bg-[#F7F4EF] min-h-screen flex flex-col">
            <h1 className="text-3xl font-bold text-black my-10">Rekomendasi Outfit</h1>
            <div className="carousel carousel-center bg-[#F7F4EF] space-x-4 p-4">
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
            </div>
        </div>
    );
}