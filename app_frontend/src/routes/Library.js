import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";

const Library = () => {
    const [myPlaylists, setMyPlaylists] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest("/playlist/get/me");
            setMyPlaylists(response.data);
        };
        getData();
    }, []);

    return (
        <LoggedInContainer curActiveScreen={"library"}>
            <div className="text-white text-lg sm:text-xl pt-6 sm:pt-8 font-semibold">
                My Playlists
            </div>
            <div className="py-4 sm:py-5 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {myPlaylists.map((item) => {
                    return (
                        <Card
                            key={item._id}
                            title={item.name}
                            description=""
                            imgUrl={item.thumbnail}
                            playlistId={item._id}
                        />
                    );
                })}
            </div>
        </LoggedInContainer>
    );
};

const Card = ({ title, description, imgUrl, playlistId }) => {
    const navigate = useNavigate();
    return (
        <div
            className="bg-black bg-opacity-40 w-full p-3 sm:p-4 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => {
                navigate("/playlist/" + playlistId);
            }}
        >
            <div className="pb-3 sm:pb-4 pt-2">
                <img
                    className="w-full h-36 sm:h-40 rounded-md object-cover"
                    src={imgUrl}
                    alt={title}
                />
            </div>
            <div className="text-white font-semibold py-2 sm:py-3 truncate">
                {title}
            </div>
            {description && (
                <div className="text-gray-500 text-sm truncate">{description}</div>
            )}
        </div>
    );
};

export default Library;
