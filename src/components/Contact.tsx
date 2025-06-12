import React from 'react';

const Contact = () => {
    return (
        <div className=" py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl font-bold mb-8 tracking-wider text-amber-400">LOCATION</h1>

                <div className="space-y-8 mb-[150px]">
                    <p className="text-2xl tracking-wider">THEGENTLEMANSLAB914@GMAIL.COM</p>


                    <div className="text-xl tracking-wider">
                        <p>584 A NORTH AVENUE</p>
                        <p>NEW ROCHELLE, NY 10801</p>
                    </div>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-md transition duration-300 transform hover:scale-105">
                        CALL NOW
                    </button>
                </div>

                {/* Optional: Add a map component here */}
                <div className="my-12 flex items-center justify-center">
                    <div className="w-full h-[27rem]">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://maps.google.com/maps?q=584%20A%20North%20Avenue%20New%20Rochelle%2C%20NY%2010801&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;