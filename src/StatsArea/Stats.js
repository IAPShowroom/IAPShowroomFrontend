import useFetch from "../useFetch";
import React, { useState } from "react";
import Progress from "./Progress";
import { blue } from "@material-ui/core/colors";
// import ProgressBar from 'react-bootstrap/ProgressBar'
// import 'bootstrap/dist/css/bootstrap.css';


const Stats = () => {
    
    const {data:stats, isLoading, error} = useFetch('http://localhost:8000/stats');
   
   
    return ( 
        <div >
            {/* {error && <div> {error} </div>}
            {isLoading && <div> Loading...</div>} */}
            <div className="statsdate" style={{ borderBottom: '1px solid #8e8a8a' }} >
                <h2> Conference Stats </h2>  <h3>March 23, 2022</h3>
               
            </div>
          
           
            <div className="stat-prog">
             {stats && stats.map((stat)=>(
                <div key={stat.id}>
                {/* <p>Total Participants</p> */}
                <h3>Overall Participants</h3>

                    <p>Total Participants</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.activeParticipants}`} totalItem={`${stat.activeParticipants}`} /> 
                    </div> <br/>
                    {/* <p>Total Participants</p>
                    <div className="stat-prog-bar">
                        <ProgressBar now={stat.activeParticipants} label={`${stat.activeParticipants}`} /> 
                    </div> <br/> */}

                    <p>General Participants</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.activeParticipants}`} totalItem={`${stat.generalParticipants}`} /> 
                    </div> <br/>                                        
                    
                    <p>Research Student Participants</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.activeParticipants}`} totalItem={`${stat.researchStudParticipants}`} /> 
                    </div> <br/>

                    <p>Company Representatives Participants</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.activeParticipants}`} totalItem={`${stat.companyRepParticipants}`} /> 
                    </div> <br/>

                        <p>Advisor Participants</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.activeParticipants}`} totalItem={`${stat.professorParticipants}`} /> 
                    </div> <br/>

                    <p>Women</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.activeParticipants}`} totalItem={`${stat.totalWomen}`} /> 
                    </div> <br/>

                    <p>Men</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.activeParticipants}`} totalItem={`${stat.totalMen}`} /> 
                    </div> <br/>

                    <p>Other</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.activeParticipants}`} totalItem={`${stat.totalNotDisclosed}`} /> 
                    </div> <br/>


                    <h3>Project Research Students</h3>

                    <p>Research Student Participants</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.researchStudParticipants}`} totalItem={`${stat.researchStudParticipants}`} /> 
                    </div> <br/>

                    <p>Research Students from ICOM</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.researchStudParticipants}`} totalItem={`${stat.resStudICOM}`} /> 
                    </div> <br/>

                    <p>Research Students from INEL</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.researchStudParticipants}`} totalItem={`${stat.resStudINEL}`} /> 
                    </div> <br/>

                    <p>Current Grad Students</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.researchStudParticipants}`} totalItem={`${stat.resStudGRAD}`} /> 
                    </div> <br/>

                    <p>Women</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.researchStudParticipants}`} totalItem={`${stat.totalResStudWomen}`} /> 
                    </div> <br/>

                    <p>Men</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.researchStudParticipants}`} totalItem={`${stat.totalResStudMen}`} /> 
                    </div> <br/>

                    <p>Other</p>
                    <div className="stat-prog-bar">
                        <Progress totalp={`${stat.researchStudParticipants}`} totalItem={`${stat.totalResStudNotDisclosed}`} /> 
                    </div> <br/>

                </div>
             ))}
            </div>

        </div>

    );
}
 
export default Stats;

// constructor(props) {
//     super(props);

//     this.state = {
//       percentage: 21
//     };

//     this.handleChangeEvent = this.handleChangeEvent.bind(this);
// }

//   handleChangeEvent(event) {
//     this.setState({
//       percentage: event.target.value
//     });
//   }

//   render() {
//     return (
//       <div>
//           <CircularProgressBar
//             strokeWidth="10"
//             sqSize="200"
//             percentage={this.state.percentage}/>
         
//         </div>
//     );