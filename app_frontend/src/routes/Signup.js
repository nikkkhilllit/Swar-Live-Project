import { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import img from "../assets/images/j.jpg";
import WrongInfoModal from "../modals/WrongInfoModal.js";

const SignupComponent = () => {
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState({}); // State for managing errors
    const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const [createUnAuthModalOpen, setCreateUnAuthModalOpen] = useState(false);
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const signUp = async () => {
        const newError = {};

       

        if (!validateEmail(email)) {
            newError.email = "Invalid email format. Please include '@' and a domain.";
        }

        if (password !== confirmPassword) {
            newError.confirmPassword = "Passwords do not match.";
        }

        if (Object.keys(newError).length) {
            setError(newError);
            return;
        }

        const data = { email, password, username, firstName, lastName };
        const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
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
        <div className="w-full h-full flex flex-col items-start pl-12 bg-app-gray overflow-auto"
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
              {createUnAuthModalOpen && (
                <WrongInfoModal
                    closeModal={() => {
                        setCreateUnAuthModalOpen(false);
                    }}
                />
            )}
            <div className="logo p-5 w-2/5 flex justify-center">
                <Icon icon="marketeq:microphone-music-2" width="40" />
                <div className="text-4xl text-gray-400 font-teko ml-2">
                    <Link to="/home">Swar</Link>
                </div>
            </div>
            <div className="inputRegion w-2/5 py-20 p-8 flex items-center justify-center bg-black text-white flex-col rounded-lg">
                <div className="font-bold mb-4 text-2xl">
                    Sign up for free to start listening.
                </div>
                <TextInput
                    label="Email address"
                    placeholder="Enter your email"
                    className={`mt-6 ${error.email ? 'border-red-500' : ''}`}
                    value={email}
                    setValue={setEmail}
                />
                {error.email && <div className="text-red-500 text-sm">{error.email}</div>}
                
                <TextInput
                    label="Username"
                    placeholder="Enter your username"
                    
                    value={username}
                    setValue={setUsername}
                />
                
                <PasswordInput
                    label="Create Password"
                    placeholder="Enter a strong password"
                    className={`mb-6 ${error.confirmPassword ? 'border-red-500' : ''}`}
                    value={password}
                    setValue={setPassword}
                />
                
                <PasswordInput
                    label="Confirm Password"
                    placeholder="Enter your password again"
                    className={`mb-6 ${error.confirmPassword ? 'border-red-500' : ''}`}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                />
                {error.confirmPassword && <div className="text-red-500 text-sm">{error.confirmPassword}</div>}
                
                <div className="w-full flex justify-between items-center space-x-4">
                    <TextInput
                        label="First Name"
                        placeholder="Enter Your First Name"
                        className="my-6"
                        value={firstName}
                        setValue={setFirstName}
                    />
                    <TextInput
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        className="my-6"
                        value={lastName}
                        setValue={setLastName}
                    />
                </div>
                <div className="w-full flex items-center justify-center my-2">
                    <button
                        className="bg-app-gray font-semibold p-3 px-10 rounded-full"
                        onClick={(e) => {
                            e.preventDefault();
                            signUp();
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Already have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    <Link to="/login">LOG IN INSTEAD</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupComponent;
