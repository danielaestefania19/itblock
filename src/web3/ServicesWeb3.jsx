import { useRef } from 'react';
import bgweb3 from '../assets/bgcard.png'
import Cubo from '../assets/Cubo.png'
import Aro from '../assets/Aro.png'

const ServicesWeb3 = () => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -300, // Ajusta este valor según la cantidad que desees desplazar
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 300, // Ajusta este valor según la cantidad que desees desplazar
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="container flex-grow w-full py-4 sm:py-16 mx-auto">

            <div className="mx-auto w-full px-2">
                <div className="container my-8">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-center text-3xl mb-4 uppercase bg-white text-gray-700 mx-auto px-2">Blog</h1>
                        <div>
                            <button onClick={scrollLeft} className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold">{"<"}</button>
                            <button onClick={scrollRight} className="cursor-pointer text-xl mx-1 text-indigo-600 font-bold">{">"}</button>
                        </div>
                    </div>
                    <div
                        ref={scrollContainerRef}
                        id="scrollContainer"
                        className="flex flex-no-wrap overflow-hidden items-start mb-8"
                    >
                        <div
                            className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg bg-black"
                            style={{
                                backgroundImage: `url(${bgweb3})`, // Usa la imagen de fondo
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        >
                            <a href="#" className="space-y-4">
                            <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        className="w-72 object-cover shadow-md hover:shadow-xl rounded-lg"
                                        src={Aro}
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="font-bold text-white text-3xl mb-2">Some title goes here</h3>
                                    </div>
                                    <div className="text-lg">
                                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div
                            className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg bg-black"
                            style={{
                                backgroundImage: `url(${bgweb3})`, // Usa la imagen de fondo
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center'
                            }}
                        >
                            <a href="#" className="space-y-4">
                           
                                <div className="px-4 py-2">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="font-bold text-white text-3xl mb-2">Some title goes here</h3>
                                    </div>
                                    <div className="text-lg">
                                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam</p>
                                    </div>
                                </div>
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        className="w-72 object-cover shadow-md hover:shadow-xl"
                                        src={Cubo}
                                        alt=""
                                    />
                                </div>
                            </a>
                        </div>


                        <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                            <a href="#" className="space-y-4">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="font-bold text-gray-800 text-3xl mb-2">Some title goes here</h3>
                                    </div>
                                    <div className="text-lg">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam</p>
                                        <p className="font-medium text-sm text-indigo-600 mt-2">
                                            Read more<span className="text-indigo-600">&hellip;</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                            <a href="#" className="space-y-4">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="font-bold text-gray-800 text-3xl mb-2">Some title goes here</h3>
                                    </div>
                                    <div className="text-lg">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam</p>
                                        <p className="font-medium text-sm text-indigo-600 mt-2">
                                            Read more<span className="text-indigo-600">&hellip;</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                            <a href="#" className="space-y-4">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="font-bold text-gray-800 text-3xl mb-2">Some title goes here</h3>
                                    </div>
                                    <div className="text-lg">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam</p>
                                        <p className="font-medium text-sm text-indigo-600 mt-2">
                                            Read more<span className="text-indigo-600">&hellip;</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                            <a href="#" className="space-y-4">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="font-bold text-gray-800 text-3xl mb-2">Some title goes here</h3>
                                    </div>
                                    <div className="text-lg">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam</p>
                                        <p className="font-medium text-sm text-indigo-600 mt-2">
                                            Read more<span className="text-indigo-600">&hellip;</span>
                                        </p>
                                    </div>
                                </div>
                            </a>

                        </div>
                        <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
                            <a href="#" className="space-y-4">
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        className="object-cover shadow-md hover:shadow-xl rounded-lg"
                                        src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixqx=3H1AJd0Pae&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                                        alt=""
                                    />
                                </div>
                                <div className="px-4 py-2">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="font-bold text-gray-800 text-3xl mb-2">Some title goes here</h3>
                                    </div>
                                    <div className="text-lg">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur corrupti vel quisquam id itaque nam</p>
                                        <p className="font-medium text-sm text-indigo-600 mt-2">
                                            Read more<span className="text-indigo-600">&hellip;</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Repite este bloque para más tarjetas */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesWeb3;
