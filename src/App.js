import '@progress/kendo-theme-default/dist/all.css';
import Login from './Login';
import GeneralSignUp from './UserSignUp/GeneralSignUp';
import Navbar from './Navbar';
import Home from './Home';
import Stage from './StageArea/Stage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Rooms from './RoomArea/Rooms';
import ProjectRoom from './RoomArea/ProjectRoom';

import NotFound from './NotFound';

import Stats from './Stats';
import Sponsors from './Sponsors';
import Schedule from './Schedule/Schedule';
import ScheduleDay from './Schedule/ScheduleDay';
import ScheduleCreate from './Schedule/ScheduleCreate';
import ConferenceDetails from './ConferenceDetails';
import ScheduleNewEvent from './Schedule/ScheduleNewEvent';
import EventDetails from './EventDetails';
import ScheduleReview from './Schedule/ScheduleReview';
import ScheduleUpdateEvent from './Schedule/ScheduleUpdateEvent';
import AccountCreated from './UserSignUp/AccountCreated';
import SignUpPage from './UserSignUp/SignUpPage';

import Calendar from './Schedule/Calendar';
import ProtectedRoute from './ProtectedRoute';

import C2 from './Schedule/C2';
import Logout from './Logout';
import Roles from './Roles';
import { QueryClient, QueryClientProvider, useQuery  } from 'react-query';

const queryClient = new QueryClient();


function App() {

  // const likes = 100;
  // const FEAV = "https://drive.google.com/file/d/1Oa8CutI95VZUt05YpeYBVMcgKLhpjGsx/view?usp=sharing";


  return (
    <div className="App"> 
    
     
      <Router>
        <Switch>
          <Route exact path="/"> 
            <Login/> {/*Login component*/}
          </Route>
          <Route path="/signUp"> 
           <SignUpPage/> {/*Sign Up component*/}
          </Route>
                 
          {/* Schedule Review  component - view schedule before submitting* */}
          <Route path="/accountCreated"> 
            <AccountCreated/> 
          </Route>


            <div className="content">
              {/* <ProtectedRoute component={Navbar}/> */}
               {/*Navigation bar*/}
               <Navbar></Navbar>
      
                {/*Home component*/}
                <ProtectedRoute path="/home" component={Home}/>
                {/* <Route path="/home" > 
                  <Home/>
                </Route> */}
                <ProtectedRoute path="/logout" component={Logout}/>
                

                {/*Stage component*/}
                <ProtectedRoute path="/stage" component={Stage}>
                  
                </ProtectedRoute>

                {/*Rooms component*/}
                <ProtectedRoute path="/rooms" component={Rooms}>
                 
                </ProtectedRoute>

                {/*Project Room component*/}
                <Route path="/project_room/:id"> 
                  <ProjectRoom/> 
                </Route>

                {/*Stats component*/}
                <Route path="/stats">
                  <Stats/> 
                </Route>

                {/*Sponsors component*/}
                <Route path="/sponsors">
                  <Sponsors/> 
                </Route>           

                {/*Schedule component - schedule of conferencia*/}
                <Route exact path="/schedule">
                  <Schedule/>
                </Route>
                            
                {/* Create Schedule component - organize events and projects (calendar component)*/}
                <Route exact path="/create_day"> 
                  <ScheduleDay/> 
                </Route>
                
                <Route exact path="/conference_details/:id"> 
                  <ConferenceDetails/> {/*Event Details component*/}
                </Route>
                
                {/*Create Schedule component - organize events and projects (calendar component)*/}
                <Route exact path="/create_schedule"> 
                  <ScheduleCreate/> 
                </Route>
                
                {/*NewEvent component - events created manually*/}
                <Route exact path="/new_event"> 
                  <ScheduleNewEvent/> 
                </Route>

                {/*NewEvent component - events created manually*/}
                <Route exact path="/update_event/:id"> 
                  <ScheduleUpdateEvent/> 
                </Route>

                <Route exact path="/event_details/:id"> 
                  <EventDetails/> {/*Event Details component*/}
                </Route>

                {/* Schedule Review  component - view schedule before submitting* */}
                <Route exact path="/schedule/review"> 
                  <ScheduleReview/> 
                </Route>
                
                {/* <QueryClientProvider client={queryClient}>
                  {/* Calendar  component - view schedule before submitting* *
                  <Route path="/calendar"> 
                    <Calendar/> 
                  </Route>
                </QueryClientProvider> */}

                <Route path="/logout"> 
                  <Logout/> 
                </Route>

                <Route path="/roles"> 
                  <Roles/> 
                </Route>

                <Route exact path="/cal"> 
                  <C2/> 
                </Route>
                
               
              </div> 
              <Route path="*"> 
                <NotFound/> {/*NotFound component*/}
              </Route> 
          </Switch>     
          {/* <p> Liked {likes} times </p> </div>  {/* to create a clickable link (like in documents) */}
       
          {/*<a href={FEAV}>FRONT END ADMIN VIEW</a>  */}
        </Router> 
        
      </div>
    
  );
}

export default App;
