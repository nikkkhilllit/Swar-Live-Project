import { useState, useEffect } from "react";
import SingleSongCard from "../components/shared/SingleSongCard";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import LoggedInContainer from "../containers/LoggedInContainer";

const MyMusic = () => {
    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/song/get/mysongs"
            );
            setSongData(response.data);
        };
        getData();
    }, []);

    return (
        <LoggedInContainer curActiveScreen="myMusic">
            <div className="text-white text-xl font-semibold pb-4 pl-4 pt-8">
                My Songs
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 pb-8">
                {songData.map((item) => {
                    return (
                        <SingleSongCard
                            key={item.id}
                            info={item}
                            playSound={() => {}}
                        />
                    );
                })}
            </div>
        </LoggedInContainer>
    );
};

export default MyMusic;