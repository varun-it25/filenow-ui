import './App.scss'
import Left from './components/Left'
import { FaLink } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { LuFile } from "react-icons/lu";
import { RiUploadCloudLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import Share from './components/Share';
import axios from 'axios';

const Send = () => {  
  const[select, setSelect] = useState(true);
  const[url, setUrl] = useState("");
  const[file, setFile] = useState(null);
  const[filename, setFilename] = useState("");
  const[upload, setUpload] = useState(false);
  const[uploading, setUploading] = useState(false);
  const[share, setShare] = useState(false);

  function uploadFile(e){
    e.preventDefault();
    setUpload(false);
    setUploading(true);
    setTimeout(()=>{
      setUploading(false);
      setUrl(`file`)
      setShare(true);
    },3000)
    // const formData = new FormData();
    // formData.append(`file`, file);
    // try{
    //   axios.post(``, formData)
    //     .then(res => {
    //     })
    // } catch(err) {
    //   console.log(err)
    // }
  }

  useEffect(()=>{
    if(file){
      setSelect(false);
      setUpload(true);
      setFilename(file.name);
    }
  },[file])

  function fileSetter(e){
    setFile(e.target.files[0]);
  }

  return (
    <div className='App'>
      <Left />      
      <form className='main'>
        <nav>FileNow</nav>
        {
          (select)
            ? <div className='main'>
                <input type="file" id='inp' onChange={fileSetter} hidden/>
                <label htmlFor='inp' className='select' >
                  <div className='container'>
                    <MdOutlineFileUpload id='send-icon'/>
                    <p>Browse files for upload</p>
                    <label htmlFor='inp' className='button'>Browse</label>
                  </div>
                </label>
              </div>
            : ``
        }
        {
          (upload)
            ? <div className='main'>
                <div className='upload'>
                  <div className='container'>
                    <div className="file">
                      <LuFile id="file-icon"/>
                      <p>{filename}</p>
                    </div>
                  </div>
                  <button onClick={uploadFile}>Upload</button>
                </div>
              </div>
            : ``
        }
        {
          (uploading)
            ? <div className='main'>
                <div className='uploading'>
                  <RiUploadCloudLine id="uploading-icon"/>
                  <p>File is uploading</p>
                  <div className="progress-div">
                    <div className="progress"></div>
                  </div>
                </div>
              </div>
            : ``
        }
        {
          (share)
            ? <Share url={url}/>
            : ``
        }
      </form>
    </div>
  )
}

export default Send