import { FaLink } from "react-icons/fa6";

const Share = ({url}) => {
  function copyLink(){
    navigator.clipboard.writeText(url);
    alert(url);
  }
  return (
    <div className='main'>
      <div className='share'>
         <p id="title">Share file</p>
         <p id="sub-title">Anyone can download a file by the link.</p>
         <div id="line"></div>
         <div className="link-div">
            <div className="link-icon-div">
              <FaLink id="link-icon"/>
            </div>
            <div className="link">
               <p>{url}</p>
            </div>
         </div>
         <button onClick={copyLink}>Copy link</button>
      </div>
    </div>
  );
};

export default Share;
