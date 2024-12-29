import LoggedInContainer from "../containers/LoggedInContainer";

const About = () => {
    return (
        <LoggedInContainer curActiveScreen="about">
            <div className="content p-4 sm:p-8 pt-0 text-gray-400 overflow-auto">
                <div className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5 text-white mt-6 sm:mt-8">
                    About Swar
                </div>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:mb-4">
                    <div className="flex-1">
                        Welcome to Swar, your ultimate destination for celebrating the rich tapestry of Indian music. Inspired by the Sanskrit word for musical notes, Swar is dedicated to glorifying the diverse genres that make up India’s vibrant soundscape. Our mission is to provide music lovers with a platform where they can easily discover, enjoy, and connect with their favorite tracks without the interruption of traditional ads. Instead, we offer clickable photo ads that promote upcoming concerts and events, supporting artists while keeping your listening experience seamless.
                    </div>
                </div>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:mb-4">
                    <div className="flex-1">
                        At Swar, we pride ourselves on offering high-quality music and an intuitive user interface that caters to Indian music enthusiasts across various genres—from classical to contemporary. Our platform is designed for everyone, ensuring that every listener can find something that resonates with their taste. With no irrelevant ads cluttering your experience, you can immerse yourself fully in the music you love.
                    </div>
                </div>
                <div className="mt-4 sm:mt-6">
                    For any questions or feedback, feel free to reach out to us. Together, let’s celebrate the beauty of Indian music!
                </div>
            </div>
        </LoggedInContainer>
    );
};

export default About;
