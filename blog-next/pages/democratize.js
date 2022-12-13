import React from "react";
import PortSample from "../components/portSample/portSample";
import addEvent from '../images/Democratize/addEvent.png';
import eventPage from '../images/Democratize/eventPage.png';
import login from '../images/Democratize/login.png';
import main from '../images/Democratize/main.png';

export default function Democratize(){
    return(
        <div className="portfolio-div">
        <PortSample
            header="Democratize"
            headerContent="Democratize is a planning event application. With a login and authentication feature, you can manage your friends
            or invite new ones, create events and let everyone suggest a venue and vote for the best option anonymously, at the end the venue with the most votes
            is the winner. Tech Stack is Javascript, React, Express and Mongodb."
            image1={login}
            sectionHeader1="Login and authentication"
            content1="I worked the part of the login and the authentication with 
            JWT and BCrypt."

            image2={addEvent}
            sectionHeader2="Add Event"
            content2="Click the add event icon in your navbar and start creating a event. You can select between your friends, add 
            the date of the event, the name of the event and finally the picture that represents better the nature of your event. You
            and your friends will be able to access the event and make your suggestion and vote after that."

            image3={main}
            sectionHeader3="Main Page"
            content3="See all your future events, who organized it and how many people is attending, 
            in every event you can find two boxes marked as suggested and voted, green means you have finished
            the task and red means you still have it as pending."


            image4={eventPage}
            sectionHeader4="Event Page"
            content4="Once in the Main page you can click on any event and check the status, if you still have not suggested
            a venue you will be asked to make a suggestion, above the form you will be able to see what your friends have 
            have suggested so far, after suggesting you will be able to vote, once you vote you will be able to see what venue 
            is at the top of the ranking and once the vote process is finished a winner will be announced."


        />
    </div>
    )
} 