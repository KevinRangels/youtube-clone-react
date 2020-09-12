import React from 'react'
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import "./SearchPage.css"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>
            <ChannelRow 
                image = "https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
                channel = "Clever Programmer"
                verified
                subs = "660K"
                noOfVideos = {382}
                description = "You can find awesome programming lessons here! Also, expect programming  tips and tricks that will take your coding skills to the ..."
            />
            <hr/>
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Join the How To Become React JavaScript Developer Webinar"
                timestamp="Emitido hace 1 día"
                channel="Clever Programmer"
                title="Should YOU Major In Computer Science?"
                image="https://i.ytimg.com/vi/-zCsARnxx7c/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDdIecKayEzs5hiMAKHRqXa8XKuxQ"
            />
            <VideoRow
                views="97.178"
                subs="659K"
                description="In this FREE LIVE training, Qazi and Sonny will build a Facebook Clone LIVE with REACT JS and firebase!"
                timestamp="Emitido hace 2 semanas"
                channel="Clever Programmer"
                title="Build a Facebook Clone with REACT JS for Beginners!"
                image="https://i.ytimg.com/an_webp/B-kxUMHBxNo/mqdefault_6s.webp?du=3000&sqp=CPDp9PoF&rs=AOn4CLDcQtWvwdLl0VyNLyQtAxTRhteRXw"
            />
            <VideoRow
                views="81.367"
                subs="659K"
                description="In this FREE LIVE training, Qazi and Sonny will build a Google Search Clone LIVE with REACT JS and firebase!"
                timestamp="Emitido hace 3 semanas"
                channel="Clever Programmer"
                title="Let's Build a GOOGLE Clone with REACT JS for Beginners!"
                image="https://i.ytimg.com/an_webp/DAWWf7q8sqM/mqdefault_6s.webp?du=3000&sqp=CKyj9foF&rs=AOn4CLCU-q-ra0oKtbwzJRNsYYFE5du-Mw"
            />
            <VideoRow
                views="1.4M"
                subs="659K"
                description="Join the How To Become React JavaScript Developer Webinar"
                timestamp="Emitido hace 1 día"
                channel="Clever Programmer"
                title="Should YOU Major In Computer Science?"
                image="https://i.ytimg.com/vi/-zCsARnxx7c/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDdIecKayEzs5hiMAKHRqXa8XKuxQ"
            />
            <VideoRow
                views="97.178"
                subs="659K"
                description="In this FREE LIVE training, Qazi and Sonny will build a Facebook Clone LIVE with REACT JS and firebase!"
                timestamp="Emitido hace 2 semanas"
                channel="Clever Programmer"
                title="Build a Facebook Clone with REACT JS for Beginners!"
                image="https://i.ytimg.com/an_webp/B-kxUMHBxNo/mqdefault_6s.webp?du=3000&sqp=CPDp9PoF&rs=AOn4CLDcQtWvwdLl0VyNLyQtAxTRhteRXw"
            />
            <VideoRow
                views="81.367"
                subs="659K"
                description="In this FREE LIVE training, Qazi and Sonny will build a Google Search Clone LIVE with REACT JS and firebase!"
                timestamp="Emitido hace 3 semanas"
                channel="Clever Programmer"
                title="Let's Build a GOOGLE Clone with REACT JS for Beginners!"
                image="https://i.ytimg.com/an_webp/DAWWf7q8sqM/mqdefault_6s.webp?du=3000&sqp=CKyj9foF&rs=AOn4CLCU-q-ra0oKtbwzJRNsYYFE5du-Mw"
            />
        </div>
    )
}

export default SearchPage
