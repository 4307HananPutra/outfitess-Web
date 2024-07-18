import Image from "next/image";
import Sample from "../../public/sample.png";

export default function Box2() {
    return (
        <div className="hero bg-[#F7F4EF] min-h-screen">
            <div className="flex p-14">
                <div className="w-1/2">
                    <Image src={Sample} alt="clothes" width={500} height={500} />
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-[#7E6464]">Tampil fashionable dan percaya diri setiap hari? </h1>
                    <p className="text-[#7E6464] py-6">
                    Tidak perlu repot-repot lagi! Koleksi OOTD 
                    kami hadir dengan paduan gaya dan kenyamanan yang sempurna untuk menemani aktivitasmu.
                    </p>
                </div>
            </div>
        </div>
    );
}