import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const contactRef = useRef(null); // Ref para el formulario

  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    website: '',
    projectName: '',
    projectDescription: '',
    stage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    emailjs
      .sendForm('service_qdqrerj', 'template_f1t157a', e.target, '0b7bCrcE00ZY8GZUW')
      .then(
        (result) => {
          console.log('Email sent result:', result);
          alert('Message sent successfully');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('Message sending failed');
        }
      );
  };

  return (
    <div ref={contactRef} id="contact-us" className="flex items-center justify-center px-6 py-24 bg-black">
      <div className='max-w-7xl w-full'>
        <h2 className="text-[70px] text-white -mb-6">Lets </h2>
        <h2 className="text-[70px] text-[#04BFAD] mb-16">Connect.</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-12 rounded-[40px] shadow-lg w-full max-w-7xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div>
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="E.g. Marcus"
                className="w-full h-[55px] border border-black p-3 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E.g. marcus@outlook.com"
                className="w-full h-[55px] border border-black p-3 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Name of project:</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="E.g. Cardano"
                className="w-full h-[55px] border border-black p-3 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Website:</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="www.cardano.com"
                className="w-full h-[55px] border border-black p-3 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-gray-700">Number:</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Ej: +51 1234 5678"
                className="w-full h-[55px] border border-black p-3 rounded-xl"
                required
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full max-w-[180px] h-14 mt-2 border border-black bg-white text-black py-2 rounded-xl hover:bg-[#04BFAD] transition"
              >
                S U B M I T
              </button>
            </div>

            <div>
              <label className="block text-gray-700">Stage:</label>
              <input
                type="text"
                name="stage"
                value={formData.stage}
                onChange={handleChange}
                placeholder="Testing"
                className="w-full h-[55px] border border-black p-3 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-gray-700">Two sentence description of your project:</label>
              <textarea
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleChange}
                placeholder="..."
                className="w-full border border-black p-3 rounded-xl"
                rows="3"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;





/* const ContacUs = () => {
    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className=" inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
                ></div>
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact sales</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p>
            </div>
            <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="company"
                                id="company"
                                autoComplete="organization"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                        <div className="relative mt-2.5">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="country" className="sr-only">Country</label>
                                <select
                                    id="country"
                                    name="country"
                                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                >
                                    <option>US</option>
                                    <option>CA</option>
                                    <option>EU</option>
                                </select>
                            </div>
                            <input
                                type="tel"
                                name="phone-number"
                                id="phone-number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <button
                                type="button"
                                className="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                role="switch"
                                aria-checked="false"
                                aria-labelledby="switch-1-label"
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span aria-hidden="true" className="h-4 w-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                            </button>
                        </div>
                        <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                            By selecting this, you agree to our{" "}
                            <a href="#" className="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Lets talk
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContacUs;
 */