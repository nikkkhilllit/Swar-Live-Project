import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SinglePlaylistView = () => {
    const [playlistDetails, setPlaylistDetails] = useState({});
    const { playlistId } = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/playlist/" + playlistId
            );
            setPlaylistDetails(response);
            console.log(response);
        };
        getData();
    }, [playlistId]);

    return (
        <LoggedInContainer curActiveScreen={"library"}>
            {playlistDetails._id && (
                <div className="w-full sm:w-4/5 lg:w-3/5 mx-auto pt-8 px-4">
                    <div className="text-white text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
                        {playlistDetails.name}
                    </div>
                    <div className="pt-6 space-y-4 sm:space-y-6">
                        {playlistDetails.songs.map((item) => {
                            return (
                                <SingleSongCard
                                    info={item}
                                    key={item._id || JSON.stringify(item)}
                                    playSound={() => {}}
                                    className="w-full"
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </LoggedInContainer>
    );
};

export default SinglePlaylistView;
