import { useNavigate } from "react-router-dom";
import LoggedInContainer from "../containers/LoggedInContainer";

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
    return (
        <LoggedInContainer curActiveScreen="home">
            <PlaylistView titleText="Trending" cardsData={Trending} />
            <PlaylistView titleText="Desi HipHop" cardsData={DesiHipHop} />
            <PlaylistView titleText="Bollywood" cardsData={BollyWood} />
            {/* Add other playlists as needed */}
        </LoggedInContainer>
    );
};
<div className="flex-1 flex justify-start items-center"></div>
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
