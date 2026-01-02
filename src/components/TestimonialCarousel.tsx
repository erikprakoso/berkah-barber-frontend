import React, { useState, useEffect } from 'react';

const testimonials = [
    {
        id: 1,
        quote: "Pelayanan terbaik di kota ini! Potongannya rapi, tempatnya chill banget, dan pomade-nya bikin rambut stay on point seharian.",
        name: "Bima Abimanyu",
        role: "Regular Customer"
    },
    {
        id: 2,
        quote: "Barber paling recommended! Capster-nya paham banget gaya yang cocok sama bentuk wajah. Vibes tempatnya juga asik buat nunggu.",
        name: "Dodi Saputra",
        role: "Loyal Member"
    },
    {
        id: 3,
        quote: "Udah langganan dari tahun lalu, gak pernah kecewa. Hasil fade-nya smooth banget, detailnya dapet.",
        name: "Ahmad Fauzi",
        role: "Happy Client"
    }
];

const TestimonialCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full max-w-xl">
            <div className="mb-6">
                <span className="material-symbols-outlined text-5xl text-primary/40">format_quote</span>
            </div>

            <div className="grid grid-cols-1">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`col-start-1 row-start-1 transition-all duration-500 ease-in-out ${index === currentIndex
                            ? 'opacity-100 translate-x-0 z-10'
                            : 'opacity-0 translate-x-8 z-0 pointer-events-none'
                            }`}
                    >
                        <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                            "{testimonial.quote}"
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white/10 border-2 border-primary/20 text-white">
                                <span className="material-symbols-outlined text-2xl">person</span>
                            </div>
                            <div>
                                <p className="font-bold text-white">{testimonial.name}</p>
                                <p className="text-sm text-primary">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 mt-8 z-20 relative">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-600 hover:bg-gray-500'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialCarousel;
