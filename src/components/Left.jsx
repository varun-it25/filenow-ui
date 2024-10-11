import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { TbClock } from "react-icons/tb";
import { MdFolder } from "react-icons/md";

const Left = () => {
  return (
    <div className="left">
      <div className="container">
        <div className="dp">
          <p>A</p>
        </div>
        <p id="name">Aryan</p>
        <div className="tabs">
          <div className="tab">
            <MdOutlineFileUpload id="send-icon" />
            <p>Send</p>
          </div>
          <div className="tab">
            <MdOutlineFileDownload id="send-icon" />
            <p>Recieve</p>
          </div>
          <div className="tab">
            <TbClock id="send-icon" />
            <p>History</p>
          </div>
          <div className="tab">
            <MdFolder id="send-icon" />
            <p>Files</p>
          </div>
        </div>
        <p style={{ height: `100%` }}></p>
        <button id="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default Left;
