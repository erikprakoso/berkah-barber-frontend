import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="animate-on-scroll fade-up group rounded-xl bg-surface-dark border border-white/5">
            <button
                className="flex w-full cursor-pointer items-center justify-between gap-1.5 p-6 text-white text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-bold">{question}</h3>
                <span className={`shrink-0 rounded-full p-1.5 sm:p-3 transition-colors ${isOpen ? 'bg-primary text-[#211c12]' : 'bg-white/5 text-white'}`}>
                    {isOpen ? (
                        <span className="material-symbols-outlined block">remove</span>
                    ) : (
                        <span className="material-symbols-outlined block">add</span>
                    )}
                </span>
            </button>
            <div
                className={`px-6 pb-6 text-gray-400 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pb-0'
                    }`}
            >
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Bagaimana cara booking jadwal?",
            answer: "Anda bisa menekan tombol \"Booking\" di website ini yang akan mengarahkan Anda langsung ke WhatsApp admin kami atau sistem reservasi online kami. Pilih jam yang tersedia dan konfirmasi kedatangan Anda."
        },
        {
            question: "Apakah produk yang digunakan aman?",
            answer: "Tentu. Kami hanya menggunakan produk berkualitas premium yang telah terdaftar BPOM dan teruji aman untuk kulit kepala, termasuk produk signature Minyak Kemiri Alami kami."
        },
        {
            question: "Ada garansi jika hasil cukur tidak sesuai?",
            answer: "Kepuasan Anda adalah prioritas kami. Jika ada bagian yang kurang pas, silakan sampaikan langsung kepada kapster kami di tempat, dan kami akan memperbaikinya tanpa biaya tambahan."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-background-dark">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Pertanyaan Umum</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
