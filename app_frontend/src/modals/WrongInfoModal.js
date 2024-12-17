import {Link} from "react-router-dom";

const WrongInfoModal = ({closeModal}) => {
    return (
        <div
        className="absolute bg-black w-screen h-screen bg-opacity-50 flex justify-center items-center"
        onClick={closeModal}
    >
        <div
            className="bg-app-black w-1/4 rounded-md p-8"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div className="text-white mb-5 font-semibold text-lg flex flex-col justify-center items-center">
                Wrong Info
            </div>
            {/* <div className="space-y-4 space-x-3 flex justify-center items-center">
                <div
                    className="bg-white w-1/3 rounded flex font-semibold justify-center items-center py-3 mt-4 cursor-pointer"
                               >
                    <Link to="/login">Log In</Link>
                </div>
                <div
                    className="bg-white w-1/3 rounded flex font-semibold justify-center items-center py-3 mt-4 cursor-pointer"
                               >
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div> */}
        </div>
    </div>
            );
        };
                export default WrongInfoModal;