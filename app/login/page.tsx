"use client";
import { AuthContext } from "@/context/AuthProvider";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const { login, isAuth } = useContext(AuthContext);
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const router = useRouter();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/login", loginInput).then((res) => {
            login(res.data.token);
            if (isAuth) {
                return router.push("/dashboard");
            }
        });
    };

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            <section className="dark:bg-gray-900 bg-[url('https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center mx-auto h-screen">
                    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl mb-4">
                                Login to your account
                            </h1>
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-4 md:space-y-6"
                                action="#"
                            >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        placeholder="name@company.com"
                                        value={loginInput.email}
                                        onChange={(e) =>
                                            setLoginInput({
                                                ...loginInput,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 "
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                        value={loginInput.password}
                                        onChange={(e) =>
                                            setLoginInput({
                                                ...loginInput,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-black"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-red-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Login
                                </button>
                                <p className="text-sm font-light text-black">
                                    Don’t have an account yet?
                                    <Link
                                        href="/"
                                        className="font-medium text-primary-600 hover:underline"
                                    >
                                        Register
                                    </Link>
                                </p>
                                <p className="text-sm font-light text-black">Hint: Login with
                                    Reqres api id.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
