import Calendar from "../Components/Calendar";
import AnnouncementComponent from "../Components/Announcement_component/AnnouncementComponent";
import MessageComponent from "../Components/Message_component/MessageComponent";
import CoursesComponent from "../Components/Courses_component/CoursesComponent";
import EventComponent from "../Components/Event_component/EventComponent";

const Dashboard = () => {
    return (
        <div className="wrapper-dashboard">
            <div><AnnouncementComponent /></div>
            <div className="calendar-dashboard"><Calendar /></div>
            <div className="messages-courses">
                <MessageComponent />
                <CoursesComponent />
            </div>
            <div>
                <EventComponent />
            </div>
        </div>
    )
}

export { Dashboard };