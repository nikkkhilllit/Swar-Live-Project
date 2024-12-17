import LoggedInContainer from "../containers/LoggedInContainer";

const Description = () => {
    return (
        <LoggedInContainer curActiveScreen="description">
            <div className="content p-8 pt-0 text-gray-400 overflow-auto">
                    <div className="text-2xl font-semibold mb-10 text-white mt-8">
                        Description
                    </div>
                    <div className="text-xl font-semibold mb-5">Email : swar3@gmail.com</div>
                    <div className="text-xl font-semibold mb-5">Phone Number : 9833527693</div>                    
                    <div className="text-xl font-semibold mb-5">Instagram : @swar</div>
                    <div className="text-xl font-semibold mb-5">Twitter : @swar</div>
            </div>
        </LoggedInContainer>
    );
};

export default Description;
