import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#463a25]/30 bg-background-dark/95 backdrop-blur-md transition-all duration-300">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-2xl">content_cut</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white">Barber & Co.</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:gap-8">
                        <a href="#" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Home</a>
                        <a href="#services" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Layanan</a>
                        <a href="#products" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Produk</a>
                        <a href="#lookbook" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">Lookbook</a>
                        <a href="#faq" className="text-sm font-medium text-gray-300 hover:text-primary transition-colors">FAQ</a>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://wa.me/6281122348654"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex cursor-pointer items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-[#211c12] shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-primary/30 active:scale-95"
                        >
                            <span className="mr-2 material-symbols-outlined text-[18px]">calendar_month</span>
                            Booking
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden flex items-center justify-center text-white hover:text-primary"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="material-symbols-outlined text-3xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-[#463a25]/30 bg-background-dark/95 backdrop-blur-md">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary/10 hover:text-primary">Home</a>
                        <a href="#services" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary/10 hover:text-primary">Layanan</a>
                        <a href="#products" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary/10 hover:text-primary">Produk</a>
                        <a href="#lookbook" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary/10 hover:text-primary">Lookbook</a>
                        <a href="#faq" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-primary/10 hover:text-primary">FAQ</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
