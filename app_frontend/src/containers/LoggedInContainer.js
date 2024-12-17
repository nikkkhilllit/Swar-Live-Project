import {useContext, useState, useEffect, useLayoutEffect, useRef} from "react";
import {Howl, Howler} from "howler";
import {Icon} from "@iconify/react";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import songContext from "../contexts/songContext";
import CreatePlaylistModal from "../modals/CreatePlaylistModal";
import AddToPlaylistModal from "../modals/AddToPlaylistModal";
import {makeAuthenticatedPOSTRequest} from "../utils/serverHelpers";
import {Link, Navigate} from "react-router-dom";
import DropdownMenu from "../components/shared/DropdownMenu";
import TranslateDiv from "../components/shared/TranslateButton";
import img from "../assets/images/g.jpeg";
import img1 from "../assets/images/seedhemaut.jpg";
import img2 from "../assets/images/raa.avif";
import img3 from "../assets/images/krsna.jpeg";
import img4 from "../assets/images/honey.jpg";
import img5 from "../assets/images/badshah.jpg";
import About from "../routes/About";


const LoggedInContainer = ({children, curActiveScreen,songId,artist}) => {
    const [createPlaylistModalOpen, setCreatePlaylistModalOpen] =
        useState(false);
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false);

    const [currentProgress, setCurrentProgress] = useState(0);
    const [totalDuration, setTotalDuration] = useState(0);

    const {
        currentSong,
        setCurrentSong,
        soundPlayed,
        setSoundPlayed,
        isPaused,
        setIsPaused,
    } = useContext(songContext);

    const firstUpdate = useRef(true);

    useLayoutEffect(() => {
        // the following if statement will prevent the useEffect from running on the first render.
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!currentSong) {
            return;
        }
        changeSong(currentSong.track);
        setCurrentProgress(0);
        setTotalDuration(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong && currentSong.track]);

    const addSongToPlaylist = async (playlistId) => {
        const songId = currentSong._id;

        const payload = {playlistId, songId};
        const response = await makeAuthenticatedPOSTRequest(
            "/playlist/add/song",
            payload
        );
        if(response._id){
            setAddToPlaylistModalOpen(false)
        }
    };

    const playSound = () => {
        if (!soundPlayed) {
            return;
        }
        soundPlayed.play();
    };

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
            onplay: () => {
                setTotalDuration(soundPlayed.duration());
                requestAnimationFrame(updateProgress);
            },
        });
        setSoundPlayed(sound);
        sound.play();
        setIsPaused(false);
    };

   

    const pauseSound = () => {
        soundPlayed.pause();
    };

    const togglePlayPause = () => {
        if (isPaused) {
            playSound();
            setIsPaused(false);
        } else {
            pauseSound();
            setIsPaused(true);
        }
    };

    const updateProgress = () => {
        if (soundPlayed) {
            setCurrentProgress(soundPlayed.seek());
            requestAnimationFrame(updateProgress);
        }
    };

    const images = [
        { src: img1, link: "https://www.skillboxes.com/events/seedhe-maut-india-tour-delhi" },
        { src: img2, link: "https://www.songkick.com/artists/10196407-raftaar" },
        { src: img3, link: "https://www.songkick.com/artists/10246493-krsna" },
        { src: img4, link: "https://www.bandsintown.com/a/2129100-yo-yo-honey-singh" },
        { src: img5, link: "https://insider.in/badshah/artist" },
      ];
    
      const [currentImage, setCurrentImage] = useState({});

   useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCurrentImage(images[randomIndex]);
  }, []);
    
    const refreshPage = () => {
        window.location.reload(); 
    };

  
    return (
        <div className="h-full w-full bg-app-black">
            {createPlaylistModalOpen && (
                <CreatePlaylistModal
                    closeModal={() => {
                        setCreatePlaylistModalOpen(false);
                    }}
                />
            )}
            {addToPlaylistModalOpen && (
                <AddToPlaylistModal
                    closeModal={() => {
                        setAddToPlaylistModalOpen(false);
                    }}
                    addSongToPlaylist={addSongToPlaylist}
                />
            )}
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
                {/* This first div will be the left panel */}
                <div className="h-full w-1/5 bg-app-black flex flex-col justify-between pb-10"
                 style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
                    <div>
                        {/* This div is for logo */}
                        <div className="logoDiv p-6 flex" onClick={refreshPage}>
                        <Icon icon="marketeq:microphone-music-2" color="orange" width="40" />
                        <div className="text-4xl text-gray-400 font-teko"><Link to="/home">Swar</Link></div>
                        </div>
                        <div className="py-5">
                            <IconText
                                iconName={"fluent:home-20-filled"}
                                displayText={"Home"}
                                targetLink={"/home"}
                                active={curActiveScreen === "home"}
                            />
                            <IconText
                                iconName={"charm:search"}
                                displayText={"Search"}
                                active={curActiveScreen === "search"}
                                targetLink={"/search"}
                            />
                            
                        </div>
                        <div className="pt-5">

                            <IconText
                                iconName={"ion:library"}
                                displayText={"Library"}
                                active={curActiveScreen === "library"}
                                targetLink={"/library"}
                            />
                            <IconText
                                iconName={
                                    "iconamoon:music-album"
                                }
                                displayText={"My Music"}
                                targetLink={"/myMusic"}
                                active={curActiveScreen === "myMusic"}
                            />
                            <IconText
                                iconName={"ic:baseline-add-box"}
                                displayText={"Create Playlist"}
                                onClick={() => {
                                    setCreatePlaylistModalOpen(true);
                                }}
                            />
                            
                        </div>
                    </div>
                    <div className="px-5">
                        
                        <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                            {/* <Icon icon="carbon:earth-europe-africa" />
                            <div className="ml-2 text-sm font-semibold">
                                English
                            </div> */}
                            <TranslateDiv />
                        </div>
                    </div>
                </div>
                {/* This second div will be the right part(main content) */}
                <div className="h-full w-4/5 bg-app-gray overflow-auto">
                    <div className="navbar w-full h-1/10 bg-app-black  flex items-center justify-end">
                    <div className="w-1/3 h-2/3 flex justify-start items-center overflow-hidden">
        <a href={currentImage.link} target="_blank" rel="noopener noreferrer">
          <img
            src={currentImage.src}
            alt="Description"
            className="h-full max-w-full object-contain"
          />
        </a>
      </div>



                        <div className="w-1/2 flex h-full">
                            <div className="w-2/3 flex justify-around items-center">
                            <IconText
                                displayText={"About"}
                                targetLink="/aboutus"
                                active={curActiveScreen === "about"}
                            />
                                 <IconText
                                displayText={"Description"}
                                targetLink="/description"
                                active={curActiveScreen === "description"}
                            />
                                 <IconText
                                displayText={"Copyright"}
                                targetLink="/copyright"
                                active={curActiveScreen === "copyright"}
                            />
                                <div className="h-1/2 border-r border-white"></div>
                            </div>
                            <div className="w-1/3 flex justify-around h-full items-center">
                            <IconText
                                displayText={"Upload Song"}
                                targetLink="/uploadsong"
                                active={curActiveScreen === "upload"}
                            />
                               <div className="relative bg-white w-10 h-10 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                            <DropdownMenu />
                        </div>
                            </div>
                        </div>
                    </div>

                    <div className="content p-8 pt-0 overflow-auto">
                        {children}
                    </div>
                </div>
            </div>
            {/* This div is the current playing song */}
            {currentSong && (
                <div className="w-2/9 h-1/10 bg-app-black bg-opacity-30 text-white flex items-center px-4">
                    <div className="w-full flex items-center">
                        <img
                            src={currentSong.thumbnail}
                            alt="currentSongThumbail"
                            className="h-14 w-14 rounded"
                        />
                        <div className="pl-4">
                            <div className="text-sm hover:underline cursor-pointer">
                                {currentSong.name}
                            </div>
                            <div className="text-xs text-gray-500 hover:underline cursor-pointer">
                                {currentSong.artist.firstName +
                                    " " +
                                    currentSong.artist.lastName}
                            </div>
                        </div>
                        <div className="pl-20 pr-10 flex items-center justify-center space-x-10">
                        
                        </div>
                        {/* <div className="w-2/3 h-1 bg-gray-600 rounded mt-2 ">
                            <div
                                className="h-full bg-orange-500 rounded"
                                style={{ width: `${(currentProgress / totalDuration) * 100}%` }}
                            />
                        </div> */}
                        
                    </div>
                    {/* <div className="w-1/2 flex justify-center h-full flex-col items-center">
                        <div className="flex w-1/2 justify-between items-center">
                             <Icon
                                icon="ph:shuffle-fill"
                                fontSize={30}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            /> 
                             <Icon
                                icon="mdi:skip-previous-outline"
                                fontSize={30}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            /> 
                            
                          
                         <Icon
                                icon="mdi:skip-next-outline"
                                fontSize={30}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            /> 
                            <Icon
                                icon="ic:twotone-repeat"
                                fontSize={30}
                                className="cursor-pointer text-gray-500 hover:text-white"
                            />  
                        </div>
                    </div> */}
                    <div className="w-1/4 flex justify-end pr-4 space-x-10 items-center">
                    <Icon
                                icon={
                                    isPaused
                                        ? "ic:baseline-play-circle"
                                        : "ic:baseline-pause-circle"
                                }
                                fontSize={50}
                                className="cursor-pointer text-gray-500 hover:text-white"
                                onClick={togglePlayPause}
                            /> 

                            <Icon
                            icon="ic:round-playlist-add"
                            fontSize={30}
                            className="cursor-pointer text-gray-500 hover:text-white"
                            onClick={() => {
                                setAddToPlaylistModalOpen(true);
                            }}
                        />
                         <Icon
                            icon="basil:cross-outline"
                            fontSize={25}
                            className="cursor-pointer text-gray-500 hover:text-white"
                            onClick={refreshPage}
                        /> 
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoggedInContainer;
