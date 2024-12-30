import { useState } from "react";
import LoggedInContainer from "../containers/LoggedInContainer";
import { Icon } from "@iconify/react";
import { makeAuthenticatedGETRequest } from "../utils/serverHelpers";
import SingleSongCard from "../components/shared/SingleSongCard";

const SearchPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [songData, setSongData] = useState([]);

  const searchSong = async () => {
    if (searchText.trim() === "") return; // Prevent empty searches
    const response = await makeAuthenticatedGETRequest(
      "/song/get/songname/" + searchText
    );
    setSongData(response.data);
  };

  return (
    <LoggedInContainer curActiveScreen="search">
      <div className="w-full py-6 px-4 sm:px-6 md:px-8">
        <div
          className={`w-full sm:w-2/3 md:w-1/3 p-3 text-sm rounded-full bg-app-black px-5 flex text-white space-x-3 items-center ${
            isInputFocused ? "border border-white" : ""
          }`}
        >
          
          <input
            type="text"
            placeholder="Search a Song"
            className="w-full bg-app-black focus:outline-none text-sm sm:text-base"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchSong();
              }
            }}
          />
          <button
            onClick={searchSong}
            className="bg-app-red text-white px-3 py-1 rounded-full text-sm sm:text-base flex items-center gap-2"
          >
            <Icon icon="ic:outline-search" className="text-lg" />
            Search
          </button>
        </div>
        {songData.length > 0 ? (
          <div className="pt-10 space-y-3">
            <div className="text-white text-sm sm:text-base">
              Showing results for <span className="font-bold">{searchText}</span>
            </div>
            {songData.map((item) => (
              <SingleSongCard
                info={item}
                key={JSON.stringify(item)}
                playSound={() => {}}
              />
            ))}
          </div>
        ) : (
            <div>
            <div className="text-gray-400  px-5 flex space-x-2 items-center text-sm">Use Correct Spelling for searching a song.</div>
          <div className="text-gray-400 pt-5 px-5 flex space-x-2 items-center text-lg sm:text-xl">
            <Icon icon="icomoon-free:shocked2" className="text-lg" />
            <div>Wow So Empty.</div>
          </div>
          </div>
        )}
      </div>
    </LoggedInContainer>
  );
};

export default SearchPage;
