import Image from "next/image";

export default function ProductGallery({ imageUrl }: { imageUrl: string | null }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-10 w-full md:w-[40%]">

            <div className="relative aspect-square w-full">
                <Image
                    src={imageUrl || "/logo/Logoitblue.png"}
                    alt="Produto ItBlue"
                    fill
                    className="object-cover border-2 border-gray-300"
                />
            </div>

            <div className="flex flex-row items-center justify-center gap-4 w-full">

                <div className="relative aspect-square w-1/3">
                    <Image
                        src={imageUrl || "/logo/Logoitblue.png"}
                        alt="Produto ItBlue"
                        fill
                        className="object-cover border-2 border-gray-300"
                    />
                </div>

                <div className="relative aspect-square w-1/3">
                    <Image
                        src={imageUrl || "/logo/Logoitblue.png"}
                        alt="Produto ItBlue"
                        fill
                        className="object-cover border-2 border-gray-300"
                    />
                </div>

                <div className="relative aspect-square w-1/3">
                    <Image
                        src={imageUrl || "/logo/Logoitblue.png"}
                        alt="Produto ItBlue"
                        fill
                        className="object-cover border-2 border-gray-300"
                    />
                </div>
            </div>

        </div>
    )
}