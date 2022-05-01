import ProgressBar from "./ProgressBar";
import { useParams } from "react-router-dom";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import { useEffect, useState } from "react";
import UpcomingEvents from "./UpcomingEvents";
import Announcements from "../HomeArea/Announcements";
import axios from "../context/axios";
import useFetchStageInfo from "../hooks/use-fetch-stage-info";


const JOIN_STAGE_URL = "/api/meet/join-stage";

const Stage = ({user_Role}) => {

    const [checked, setChecked] = useState(false);

    const {stageInfo, isLoading } = useFetchStageInfo();
    
    const handleCheck = (e) =>{
        e.preventDefault();
        setChecked(e.target.checked);
        console.log("value of check", checked);
    }

    return ( 
        <div className="stage">
            <div className="stage-1">

            <h2> STAGE </h2> 
            <div className="stage-upcoming">
                <h3>Schedule</h3> 
                <UpcomingEvents></UpcomingEvents>
            </div>
            <div className="stage-announcements">
                <Announcements user_Role={user_Role}/>               
            </div>
            </div>
           
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <ProgressBar></ProgressBar>
            <div className="bbb">
               
                {/* Update to get src url from the backend. Temporarily Hardcoded to get a view working  */}
                <iframe className="temp" src="https://iapstream.ece.uprm.edu/bigbluebutton/api/create?name=DemoMeeting&meetingID=DemoMeeting&attendeePW=ap&moderatorPW=mp&checksum=f5e85d6b55189f228cf06e4791736e44b63282f1"></iframe> 
                <br></br>
                <iframe className="iframe" src={stageInfo} allow="camera;microphone;display-capture" allowFullScreen></iframe> 
            </div>
          
        </div>

    );
}
 
export default Stage;