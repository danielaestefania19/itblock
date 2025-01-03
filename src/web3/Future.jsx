import bgweb3 from '../assets/bgweb3.png';

const Future = () => {
    return (
        <div className="relative text-white h-[90vh] flex items-center justify-start pl-8 md:pl-20">
            <img
                src={bgweb3}
                alt="Overlay Image"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'top' }}
            />
            <div className="relative z-10 text-left max-w-screen-xl ml-24">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Philosophy & Vision.</h1>
                    <h2 className="text-2xl md:text-3xl font-light mb-8">Right now we’re at the dawning of a new era, and we know you feel this paradigm shift too. That’s why you’re here.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="hover:text-white text-[16px] font-interTight font-light">
                                The changemakers of the future want to own their identities, information and funds - and rebuild the broken systems of the present.

                                At MatterBlock, we believe the decentralized ecosystem is putting power back in the hands of the people, with Web 3 as the cornerstone for change.

                                We’re gathering high-quality projects that share our core values - the bold, the brave and those not interested in being another replica of something that already exists.
                            </p>
                        </div>
                        <div>
                            <p className="hover:text-white text-[16px] font-interTight font-light">
                                History remembers the bold, and as we stand on the precipice of change, the businesses that stay the course are the ones who are committed to their vision, and have a clear path forward.

                                MatterBlock is your knowledgeable partner on this journey: we believe in the same things. We care about the same things. We’re on the same side.

                                Join us at the forefront of Web 3.</p>
                        </div>
                    </div>

                    <div className="text-left mt-8">
                        <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Future;
