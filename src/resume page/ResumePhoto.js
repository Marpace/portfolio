import { useEffect, useState } from "react";

function ResumePhoto() {

  const [resumeLoaded, setResumeLoaded] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setResumeLoaded(true);
  //   }, 200);
  // }, [])

  return (
    <div className={`resume__photo ${resumeLoaded ? "photo-open" : ""}`}>
      <img onLoad={() => setResumeLoaded(true)} className="resume__photo-image" src="./images/resume_photo.jpg"></img>
    </div>
  )
}

export default ResumePhoto;