import logo from "../assets/logo.png";
export default function Footer() {
    return (
        <footer className="bg-[#1B1B27E5] text-gray-300 py-10 w-full">
            <div className=" mx-auto px-6 w-[95%] sm:grid-cols-2 md:flex md:flex-col gap-8">




                <div className="flex flex-col gap-4">
                    <h1 className="font-bold text-xl">North Star Group</h1>
                    <hr />
                </div>





                <div className="flex flex-col md:flex-row justify-between  flex-wrap gap-8 md:gap-16 lg:gap-32">

                    {/* Logo */}
                    <div>
                        <img src={logo} alt="North Star" className="h-40 w-50 mb-4" />
                    </div>
                    {/* Products */}
                    <div>
                        <h4 className="font-semibold mb-3">PRODUCTS</h4>
                        <ul className="space-y-2 text-sm">
                            <li>NSG Money</li>
                            <li>Mobile App</li>
                            <li>NSG Card</li>
                            <li>Hardware Device</li>
                            <li>NSG Mint</li>
                            <li>NSG Exchange</li>
                            <li>EPD</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-3">RESOURCES</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Fees</li>
                            <li>Projects</li>
                            <li>Roadmap</li>
                            <li>Transaction Explorer</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-3">COMPANY</h4>
                        <ul className="space-y-2 text-sm">
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Media Centre</li>
                            <li>Testimonials</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                </div>


                <div className="flex  justify-between">
                    {/* Subscription */}
                    <div className=" ">
                        <p className="mb-3">Get The Latest Updates</p>
                        <div className="flex flex-col md:flex-row justify-center space-y-3 ">
                            <input
                                type="email"
                                placeholder="Your username"
                                className="px-3 py-1 rounded-l-md h-[30px] bg-[#13131D] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <button className="px-4 py-1 h-[30px] bg-[#202E48] text-white rounded-r-md hover:bg-blue-500 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold mb-3"></h4>
                        <ul className="space-y-2 text-sm">
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold mb-3">DOWNLOADS</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Brand Resources</li>
                            <li>Documents</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-semibold mb-3">SUPPORT</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Knowledge Base</li>
                            <li>Video Lessons</li>
                            <li>User Guides</li>
                        </ul>
                    </div>
                </div>

                <div className="flex text-center text-xs text-gray-500 space-x-2">
                    <p className="hover:text-gray-300 cursor-pointer">© 2025 North Star Group</p>

                    <p className="hover:text-gray-300 cursor-pointer">Terms & Conditions</p>
                    <p className="hover:text-gray-300 cursor-pointer">Privacy Policy</p>
                    <p className="hover:text-gray-300 cursor-pointer">Contact Us</p>
                </div>
            </div>



        </footer>
    );
}
