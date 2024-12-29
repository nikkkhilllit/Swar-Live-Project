import { useState } from "react";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";
import WrongInfoModal from "../modals/WrongInfoModal.js";
import img from "../assets/images/j.jpg";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const [createUnAuthModalOpen, setCreateUnAuthModalOpen] = useState(false);

    const login = async () => {
        const data = { email, password };
        const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, { path: "/", expires: date });
            navigate("/home");
        } else {
            setCreateUnAuthModalOpen(true);
        }
    };

    return (
        <div
            className="w-full h-full flex bg-app-black"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {createUnAuthModalOpen && (
                <WrongInfoModal
                    closeModal={() => {
                        setCreateUnAuthModalOpen(false);
                    }}
                />
            )}

            <div className="w-full flex flex-col justify-center items-center lg:flex-row">
                <div className="w-full lg:w-1/2 flex justify-center items-center lg:pl-10">
                    <div className="w-1/2 flex flex-col justify-center items-center text-white lg:w-full">
                        <div className="logo p-5 flex justify-center mb-8">
                            <Icon icon="marketeq:microphone-music-2" color="white" width="40" />
                            <div className="text-4xl text-gray-200 font-teko">
                                <Link to="/home">Swar</Link>
                            </div>
                        </div>

                        <div className="w-full max-w-md py-10 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white p-8 rounded-lg">
                            <div className="font-bold mb-4 text-xl text-center">
                                To continue, log in to Swar.
                            </div>
                            <TextInput
                                label="Email address"
                                placeholder="Email address"
                                className="my-6 w-full"
                                value={email}
                                setValue={setEmail}
                            />
                            <PasswordInput
                                label="Password"
                                placeholder="Password"
                                className="w-full"
                                value={password}
                                setValue={setPassword}
                            />
                            <div className="w-full flex items-center justify-center my-8">
                                <button
                                    className="bg-app-gray font-semibold p-3 px-10 rounded-full"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        login();
                                    }}
                                >
                                    LOG IN
                                </button>
                            </div>
                            <div className="w-full border border-solid border-gray-300"></div>
                            <div className="my-6 font-semibold text-lg text-center">
                                Don't have an account?
                            </div>
                            <div className="border border-gray-300 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                                <Link to="/signup">SIGN UP FOR SWAR</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
