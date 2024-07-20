import Image from "next/image";
import Product from "../../public/Product.png"
import image4 from "../../public/image4.png"
import image5 from "../../public/image5.png"
import image6 from "../../public/image6.png"
import image7 from "../../public/image7.png"
import image8 from "../../public/image8.png"
import image9 from "../../public/image9.png"
import image10 from "../../public/image10.png"

export default function Box() {
    return (
        <div className="hero bg-[#F7F4EF] min-h-screen flex flex-col">
            <h1 className="text-3xl font-bold text-black my-10">Rekomendasi Outfit</h1>
            <div className="carousel carousel-center bg-[#F7F4EF] space-x-4 p-4">
                <div className="carousel-item">
                    <Image src={Product} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={image4} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={image5} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={image6} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={image7} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={image8} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={image9} alt="Product"/>
                </div>
                <div className="carousel-item">
                    <Image src={image10} alt="Product"/>
                </div>
            </div>
        </div>
    );
}