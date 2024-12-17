import LoggedInContainer from "../containers/LoggedInContainer";

const Copyright = () => {
    return (
        <LoggedInContainer curActiveScreen="copyright">
            <div className="content p-8 pt-0 text-gray-400 overflow-auto">
                    <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        Copyright Notice
                    </div>
                    All music and content available on Swar are provided solely for educational and promotional purposes. We respect the intellectual property rights of artists and music labels, and no ownership is claimed over any songs featured on this platform. All rights to the songs belong to their respective artists and music labels. If you are a copyright owner and believe that any content on Swar infringes your rights, please contact us, and we will promptly address your concerns.
            </div>
        </LoggedInContainer>
    );
};

export default Copyright;
