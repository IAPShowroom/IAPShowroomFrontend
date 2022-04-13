
import {Link, Redirect} from "react-router-dom";
import Announcements from "./client/Announcements";
import useFetchEvents from "./hooks/use-fetch-events";
import React from "react";


export default function Home({user_Role}) {  
  // chatContainer = React.createRef();

  const {
    events,
    redirect,
    loading
  } = useFetchEvents();

  const displayEvents = (props) => {
    const e = props;
    if(e.length>0){
      return(
        e.map((event) => {
          return (
          // event list for schedule view in Lobby 
          <div className="project-prev" key ={event.eventid}>
                <p>{event.starttime}</p>
            <div className="project-preview">
              <h2>{event.title}</h2>  <br/>
              <Link to={`/project_room/${event.projectid}`}>
                <button>Speakers</button>  
              </Link> 
              <Link to ={`/project_room/${event.projectid}`}>           
                <button>Room</button>
                      {/* <p>Written by {project.author} </p> */}
              </Link>
            </div>
          </div>
          )
        })
        )
    } else {
      <h3>No events currently available</h3>
    }

  }

  if(redirect){
    return (
      <Redirect from="*" to ="/"/>
    )
  }

  return ( 
    <div className="home">
      {loading && <div> Loading...</div>}
      <h1>Announcements</h1>
      <div >
        
        <Announcements user_Role={user_Role}/>
      </div>
      <div className="home-date-sched" style={{ borderBottom: '1px solid #8e8a8a', maxWidth: '60%',marginLeft:'15px' }} >
        <label> Schedule </label> <label>March 23, 2022</label>
      </div>
      <div className="events-home">
        {displayEvents(events)}
      </div>
    </div>   
  );
}
 
