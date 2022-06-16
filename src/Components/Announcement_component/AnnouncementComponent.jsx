import TextAnnouncement from "./TextAnnouncement";
import Announcement from "./announcement.json"

function AnnouncementComponent() {
    return (
        <div className="announcement-wrapper">
            <div className="announcement-wrapper-item">
                <div><h1>Announcement</h1><span>From your Principal or Teachers</span></div>
                <div className="group-wrapper">
                    <div className="line-color1"><span>Principal</span></div>
                    <div className="line-color2"><span>Teacher</span></div>
                </div>
            </div>

            <div className="scroll">
                {
                    Announcement.map(announcement => {
                        return (
                            <TextAnnouncement title={announcement.title} subtitle={announcement.subtitle} color={announcement.color} views={announcement.views} key={announcement.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AnnouncementComponent;
