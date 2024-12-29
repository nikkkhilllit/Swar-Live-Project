import LoggedInContainer from "../containers/LoggedInContainer";

const Description = () => {
    return (
        <LoggedInContainer curActiveScreen="description">
            <div className="content p-4 sm:p-8 pt-0 text-gray-400 overflow-auto">
                <div className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-10 text-white mt-6 sm:mt-8">
                    Description
                </div>
                <div className="text-base sm:text-xl font-semibold mb-4 sm:mb-5">
                    Email: <span className="text-gray-300">swar3@gmail.com</span>
                </div>
                <div className="text-base sm:text-xl font-semibold mb-4 sm:mb-5">
                    Phone Number: <span className="text-gray-300">9833527693</span>
                </div>
                <div className="text-base sm:text-xl font-semibold mb-4 sm:mb-5">
                    Instagram: <span className="text-gray-300">@swar</span>
                </div>
                <div className="text-base sm:text-xl font-semibold mb-4 sm:mb-5">
                    Twitter: <span className="text-gray-300">@swar</span>
                </div>
            </div>
        </LoggedInContainer>
    );
};

export default Description;
