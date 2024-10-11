import React, { useState } from 'react'
import axios from 'axios'
import './App.scss'

const dummy = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setUploading] = useState(false);

  function fileSetter(e) {
    setFile(e.target.files[0]);
  }

  async function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(`file`, file);

    try {
      const res = await axios.post(`https://filenow.onrender.com/upload`, formData );
      setUploading(false);
      console.log(res.data);
    } catch (err) {
      setUploading(false);
      console.log(err.data);
    }
  }
  return (
    <form className="App" onSubmit={formSubmit}>
      <input type="file" onChange={fileSetter} />
      <button type="submit">{isUploading ? `Uploading...` : `Upload`}</button>
    </form>
  );
};

export default dummy;
