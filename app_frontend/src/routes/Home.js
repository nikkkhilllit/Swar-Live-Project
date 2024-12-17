import {Icon} from "@iconify/react";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";
import {Link} from "react-router-dom";
import { useState } from "react";
import UnAuthModal from "../modals/UnAuth";
import img from "../assets/images/g.jpeg"
import { useNavigate } from "react-router-dom";

const Trending = [
    {
        imgUrl: "https://th.bing.com/th/id/OIP.TeM4rrSSLtcKovfNTrtJgwAAAA?rs=1&pid=ImgDetMain",
        title: "Ek Tha Raja",
        description: "Badshah",
        route: "/playlist/66f1837f42e224fd96a19f3e",
    },
    {
        imgUrl: "https://th.bing.com/th/id/OIP.O4e70eu6qREl2ST-7pHhsQHaHa?rs=1&pid=ImgDetMain",
        title: "Stree 2",
        description: "Sachin - Jigar",
        route: "/playlist/66f1ab6c378f8349c59ab78c",
    },
    {
        imgUrl: "https://th.bing.com/th/id/OIP.9TV5eEVkmmEzT8mkeUt5fwAAAA?rs=1&pid=ImgDetMain",
        title: "Aavesham",
        description: "Sushin Shyam, Nazriya Nazim, Sreenath Bhasi",
        route: "/playlist/66f1a8f0378f8349c59ab769",
    },
    {
        imgUrl: "https://th.bing.com/th/id/OIP.WzkpRFk4DOTMHMFS2_YBHAAAAA?rs=1&pid=ImgDetMain",
        title: "Laapataa Ladies",
        description: "Arijit Singh",
        route: "/playlist/66f1ad0f378f8349c59ab7b0",
    },
    {
        imgUrl: "https://i1.sndcdn.com/artworks-OAVwcqNtssuGoXEx-Q7UAsw-t500x500.jpg",
        title: "Animal",
        description: "Bhupinder Babbal",
        route: "/playlist/66f1af40378f8349c59ab7da",
    },
];

const DesiHipHop = [
    {
        imgUrl: "https://preview.redd.it/seedhe-maut-lunch-break-tracklist-artwork-v0-6vkxmtww9wfb1.jpg?width=1440&format=pjpg&auto=webp&s=7d6059005dcfa6719002fa09c4be19c5426a579f",
        title: "Lunch Break",
        description: "Seedhe Maut",
        route: "/playlist/66f18b6342e224fd96a19f80",
    },
    {
        imgUrl: "https://images.ams-prd.blv.cloud/eyJidWNrZXQiOiJpbWFnZXMtcHJkLTFvNHV6OXpieHd6cDF1Ym0iLCJrZXkiOiJkMjhkYTYxZi0xNzAxLTQ0MTUtYTA0Yi0zNDE2MDY4ZDQzZWYiLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6ImpwZWciLCJyZXNpemUiOnsid2lkdGgiOjEyMDB9fX0=",
        title: "Still Here",
        description: "Krsna",
        route: "/playlist/66f18d1542e224fd96a19fa3",
    },
    {
        imgUrl: "https://t2.genius.com/unsafe/600x600/https://images.genius.com/ee4b2dfa4b5fbebb94833fce25aefdc9.1000x1000x1.jpg",
        title: "Throwaways one",
        description: "Jaiyash, Sarcastically Kumar",
        route: "/playlist/66f190a342e224fd96a19fc3",
    },
    {
        imgUrl: "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/cf/9f/07/cf9f07b0-9bab-97f4-af62-9d05c622bedd/cover.jpg/1200x1200bf-60.jpg",
        title: "Hard Drive Vol. 1",
        description: "Raftaar",
        route: "/playlist/66f1920642e224fd96a19ff3",
    },
    {
        imgUrl: "https://c.saavncdn.com/304/Desi-Kalakaar-Hindi-2014-500x500.jpg",
        title: "Desi Kalakaar",
        description: "Yo Yo Honey Singh, Lil Golu",
        route: "/playlist/66f195e242e224fd96a1a069",
    },
];

const BollyWood = [
    {
        imgUrl: "https://th.bing.com/th/id/OIP.pc6XLW4d3tJOI7KDRDzzGwHaHa?rs=1&pid=ImgDetMain",
        title: "Rockstar",
        description: "A. R. Rahman, Irshad Kamil",
        route: "/playlist/66f199a242e224fd96a1a0a7",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/4/4f/Aashiqui_2.jpeg",
        title: "Aashiqui 2",
        description: "Arijit Singh, KK, Mithoon",
        route: "/playlist/66f19d5442e224fd96a1a117",
    },
    {
        imgUrl: "https://preview.redd.it/laila-majnu-this-movie-gets-to-me-every-time-qais-and-laila-v0-dw8msm1tnpca1.jpg?width=640&crop=smart&auto=webp&s=d4aa6d3f93b0e97bcd0e86423a75db235eb7b4d7",
        title: "Laila Majnu",
        description: "Atif Aslam",
        route: "/playlist/66f19fb642e224fd96a1a13d",
    },
    {
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/91UDTwSYsuL._AC_SL1400_.jpg",
        title: "Raanjhanaa",
        description: "A. R. Rahman",
        route: "/playlist/66f199e142e224fd96a1a0b0",
    },
    {
        imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e2/fe/21/e2fe21b6-50e6-7b4b-285a-d40394baba4e/8902894628990_cover.jpg/1200x1200bf-60.jpg",
        title: "Delhi-6",
        description: "A. R. Rahman, Rajat Dholakia",
        route: "/playlist/66f19a1742e224fd96a1a0b9",
    },
];

const Home = () => {
    const [createUnAuthModalOpen, setCreateUnAuthModalOpen] =
        useState(false);
    return (
        <div className="h-full w-full flex">
            {/* This first div will be the left panel */}
            {createUnAuthModalOpen && (
                <UnAuthModal
                    closeModal={() => {
                        setCreateUnAuthModalOpen(false);
                    }}
                />
            )}
            <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10"
            style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
                <div>
                    {/* This div is for logo */}
                    <div className="logoDiv p-6 flex">
                    <Icon icon="marketeq:microphone-music-2" color="orange" width="40" />
                    <div className="text-4xl text-gray-400 font-teko"><Link to="/home">Swar</Link></div>
                    </div>
                    <div className="py-5">
                    <IconText iconName={"fluent:home-20-filled"} 
                    displayText={"Home"}
                    active
                    />
                    <IconText iconName={"charm:search"} 
                    displayText={"Search"}
                    onClick={() => {
                        setCreateUnAuthModalOpen(true);
                    }}
                    />
        
                    <IconText iconName={"ion:library"} 
                    displayText={"Library"}
                    onClick={() => {
                        setCreateUnAuthModalOpen(true);
                    }}
                    />

                    <IconText iconName={"iconamoon:music-album"} 
                    displayText={"My Music"}
                    onClick={() => {
                        setCreateUnAuthModalOpen(true);
                    }}/>
                    </div>
                    <div className="pt-5">
                    <IconText iconName={"ic:baseline-add-box"} 
                    displayText={"Create Playlist"}
                    onClick={() => {
                        setCreateUnAuthModalOpen(true);
                    }}/>

                    <IconText iconName={"tabler:music-heart"} 
                    displayText={"Liked Songs"}
                    onClick={() => {
                        setCreateUnAuthModalOpen(true);
                    }}
                    />
                    </div>
                </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="carbon:earth-europe-africa" />
                        <div className="ml-2 text-sm font-semibold"  onClick={() => {
                        setCreateUnAuthModalOpen(true);
                    }}>
                            English
                            </div>
                    </div>
                </div>
            </div>
            {/* This second div will be the right part(main content) */}
            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
                    <div className="w-1/2 flex h-full">
                        <div className="w-3/5 flex justify-around items-center">
                        
                        </div>
                        <div className="w-2/5 flex justify-around h-full items-center">
                        <IconText
                                displayText={"Sign Up"}
                                targetLink="/signup"
                            />
                            <div className="bg-white h-2/3 px-8 flex items-center justify-center rounded-full font-semibold cursor-pointer">
                            <Link to="/login">Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content p-8 pt-0 overflow-auto">
                <PlaylistView titleText="Trending" cardsData={Trending} />
            <PlaylistView titleText="Desi HipHop" cardsData={DesiHipHop} />
            <PlaylistView titleText="Bollywood" cardsData={BollyWood} />
                </div>
            </div>
        </div>
    );
};

const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className="text-white mt-8">
            <div className="text-2xl font-semibold mb-5">{titleText}</div>
            <div className="grid grid-cols-5 gap-4">
                {cardsData.map((item) => (
                    <Card
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                        route={item.route} // Pass the route prop
                    />
                ))}
            </div>
        </div>
    );
};

const Card = ({ title, description, imgUrl, route }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(route); // Navigate to the specified route
    };

    return (
        <div
            className="bg-app-black bg-opacity-40 p-4 rounded-lg cursor-pointer"
            onClick={handleClick}
        >
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt={title} />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};


export default Home;