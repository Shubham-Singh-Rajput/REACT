import { VIDEO } from "../ActionTypes";
import screeenLoder from "./ScreenLoder";
import google from "./../../config/google.json"

const VideoList={
    list:(search)=>(dispatch)=>{

        dispatch(screeenLoder.start())
        const params=new URLSearchParams({
            q:search||'',
            part: 'snippet',
            maxResults: 50,
            key:google.apiKey
        })
        const PATH=`https://www.googleapis.com/youtube/v3/search?${params}`
        return fetch(PATH).then(d=>d.json()).then(d=>{
            dispatch({
                type:VIDEO.VIDEOLIST,
                payload:d.items
            })
            dispatch(screeenLoder.stop())
        }).catch(()=>dispatch(screeenLoder.stop()))
    }
}
export default VideoList
