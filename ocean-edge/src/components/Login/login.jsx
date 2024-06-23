import React from "react"; 

function Login() {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h1 className="text-center text-white text-2xl mb-6">Your logo</h1>
                <h2 className="text-white text-xl mb-4">Login</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-white mb-2" htmlFor="email">Email</label>
                        <input className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white placeholder-white" type="email" id="email" placeholder="username@gmail.com" />
                    </div>
                    <div>
                        <label className="block text-white mb-2" htmlFor="password">Password</label>
                        <input className="w-full px-4 py-2 rounded bg-white bg-opacity-20 text-white placeholder-white" type="password" id="password" placeholder="Password" />
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-white text-sm">Forgot Password?</a>
                    </div>
                    <button className="w-full py-2 bg-blue-800 text-white rounded">Sign in</button>
                </form>
                <div className="text-center text-white my-4">or continue with</div>
                <div className="flex justify-center space-x-4">
                    <button className="bg-white p-2 rounded-full">
                        <i className="fab fa-google text-red-500"></i>
                    </button>
                    <button className="bg-white p-2 rounded-full">
                        <i className="fab fa-github text-black"></i>
                    </button>
                    <button className="bg-white p-2 rounded-full">
                        <i className="fab fa-facebook text-blue-600"></i>
                    </button>
                </div>
                <div className="text-center text-white mt-4">
                    Don't have an account yet? <a href="#" className="underline">Register for free</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
