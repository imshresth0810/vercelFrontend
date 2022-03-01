import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import "./Lake.css"
import LazyLoad from 'react-lazyload';




export default function Ḷake() {
  const [userIndex, setUserIndex] = useState(0);
  const userdeatils = async () => {
    const response1 = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com/user/getuser", {
      method: "GET",
      headers: {
        "authToken": localStorage.getItem("usertoken")
      },
    });
    const json = await response1.json();
    // console.log(json);
    const name01 = json.userRiddleIndex;
    setUserIndex(name01);
    // console.log(userIndex, "userIndex--mainB--")
  }
  useEffect(() => {
    userdeatils();
    document.title="TAdS || VCT"
    // eslint-disable-next-line
    
  }, [userIndex, setUserIndex]);

  // -************************

  const UserRiddleupdatecount = async (score) => {
    const response = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com/user/updatecount", {
      method: "PUT",
      headers: {
        "authToken": localStorage.getItem("usertoken"),
        "userScore": score
      },
    });
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json, "jiii");
  }
  // --------------------
  const navigate = useNavigate();
  // eslint-disable-next-line
  const handlecorrect = () => {
    if (userIndex === 1) {
      toast.success("Kitne tejaswi facche hai hamare pass", {
        position: "top-center",
        autoClose: 1500
      });
      const score = userIndex + 1;
      // console.log("score---> ", score)
      UserRiddleupdatecount(score);
      setTimeout(() => {
        navigate("/game/map", { replace: true });
      }, 2000);
    }
    else {
      toast.error("Are you comedy me....", {
        position: "top-center",
        autoClose: 2000
      });
    }
  }
  // eslint-disable-next-line
  const handlewrong1 = () => {
    toast.error("Itna Galat Kaise ho sakte ho....", {
      position: "bottom-center",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong2 = () => {
    toast.error("Udi  baba... Mera 20 saal ka tajurba mei itna galat kabhi nhi dekha.", {
      position: "top-left",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong3 = () => {
    toast.error("Be Hermione, not be Ron, give a try more bcoz you are wrong", {
      position: "top-right",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong4 = () => {
    toast.error("Kacha badaam dada kacha badaam... Galti kar di hai tumnei sanam...", {
      position: "bottom-left",
      autoClose: 3000
    });
  }
  // eslint-disable-next-line
  const handlewrong5 = () => {
    toast.error("Aise jawab ke liye aapko Hogwarts...jaadu aur tantr ke vidyalaya se nikala jata hai...", {
      position: "bottom-right",
      autoClose: 3000
    });
  }


  return (
    <>
      {/* <img src={"https://github.com/TAdS-VCT/Media/blob/dbd8097066485dd07deab1a8ea971d99bb3e34c7/riddles/Lake%20Side/lake%20side%20dark.png"} alt="hii" className='lake' /> */}
      <LazyLoad> <img src={"https://github.com/TAdS-VCT/Media/blob/dbd8097066485dd07deab1a8ea971d99bb3e34c7/riddles/Lake%20Side/lake%20side%20dark.png?raw=true"} alt="hii" className='lake' /></LazyLoad>
      <div className='backbutton'>
        <h1 className="mx-3">
          <FaChevronCircleLeft onClick={() => navigate("/game/map", { replace: true })} aria-hidden="true" style={{ cursor: "pointer" }} />
        </h1>
      </div>
      <LazyLoad>
        <div className="xyz1">
          {/* <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Lake%20Side/broom_01.png?raw=true"} alt="hii" className='vectors lake1' onClick={handlecorrect} aria-hidden="true" /> */}
          {/* <img src={v1} alt="hii" className='vectors lake2' onClick={handlewrong1} aria-hidden="true" /> */}
          {/* <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Lake%20Side/pnghut_harry-potter-and-the-deathly-hallows-duistere-teken-draco-malfoy-tattoo-plant.png?raw=true"} alt="hii" className='vectors lake3' onClick={handlewrong1} aria-hidden="true" /> */}
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Lake%20Side/flag.png?raw=true"} alt="hii" className='vectors lake1' onClick={handlecorrect} aria-hidden="true" />
          <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Lake%20Side/lake%20side%20bird%20(1).png?raw=true"} alt="hii" className='vectors lake2' onClick={handlewrong5} aria-hidden="true" />
          {/* <img src={"https://github.com/TAdS-VCT/Media/blob/main/riddles/Lake%20Side/ring.png?raw=true"} alt="hii" className='vectors lake3' onClick={handlewrong5} aria-hidden="true" /> */}
          {/* <img src={""} alt="hii" className='vectors lake4' onClick={handlewrong5} aria-hidden="true" /> */}
          <ToastContainer />
        </div>
      </LazyLoad>
    </>

  )
}
