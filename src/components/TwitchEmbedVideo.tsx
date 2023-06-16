import React from 'react';
import ReactTwitchEmbedVideo from 'react-twitch-embed-video';

const MyTwitchStream = () => {
    return (
        <div className="twitch-stream-container">
            <ReactTwitchEmbedVideo channel="educup2" layout={"video"} height={250} width={800}/>

        </div>
    );
};

export default MyTwitchStream;
    