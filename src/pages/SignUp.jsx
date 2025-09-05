import signature from "../assets/signature.png";
import logo from "../assets/logo.png"

export default function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0B0F] text-white px-4">


            <div className="relative  ">

                <img src={logo} alt="North Star" className="h-20 mb-4 absolute -top-12 left-1/2 transform -translate-x-1/2" />


                <div className="bg-[#141421] p-6 md:p-8 rounded-lg w-full max-w-md   ">



                    <div className="flex flex-col gap-y-3 mb-5">

                        <div className="relative h-max">
                            <h2 className="text-xl md:text-2xl font-bold text-center my-6 ">Welcome to North Star Group</h2>

                            <img src={signature} className="absolute h-min w-[120px] right-10 -top-2 " alt="" />

                        </div>

                        <div className="">
                            <h1>Sign up with your email address or Google account.</h1>
                        </div>
                    </div>


                    <input
                        type="email"
                        placeholder="northstargroup@gmail.com"
                        className="w-full px-4 py-2 mb-4 rounded bg-[#13131D] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />

                    <button className="w-full bg-blue-600 py-2 my-6 rounded mb-4 hover:bg-blue-500 transition">
                        Continue with Email
                    </button>


                    <div className="flex items-center w-full mb-4">
                        <hr className="flex-grow border-gray-700" />
                        <span className="px-3 text-gray-500">OR</span>
                        <hr className="flex-grow border-gray-700" />
                    </div>


                    <button className="w-full bg-white text-black py-2 my-4 rounded hover:bg-gray-200 transition">
                        Continue with Google
                    </button>


                </div>


                <div className="flex flex-col mt-2 gap-2 max-w-md text-center">

                    <p className="text-center mt-4 leading-5">By signing in or creating an account, you agree with our</p>
                    <p> <span className="text-blue-400 hover:underline cursor-pointer">Terms & Conditions</span> and
                        <span className="text-blue-400 hover:underline cursor-pointer">  Privacy Policy</span>.</p>
                </div>


            </div>

        </div>
    );
}
