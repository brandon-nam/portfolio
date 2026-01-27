import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="group relative w-full h-80 overflow-hidden rounded-xl bg-gray-100">
            {images.map((img, index) => (
                <img
                    key={img}
                    src={img}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                />
            ))}

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <ChevronRight size={20} />
                    </button>
                </>
            )}
        </div>
    );
}
