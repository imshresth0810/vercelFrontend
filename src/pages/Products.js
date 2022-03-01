import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link as RouterLink } from 'react-router-dom';
// eslint-disable-next-line
// import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import './User.css'
import MyVerticallyCenteredModal from './Modal.js'
import Sound from './theme.mp3'

export default function EcommerceShop() {
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();
  const [userIndex, setUserIndex] = useState(0);
  const userdeatils = async () => {
    const response1 = await fetch("https://rv61ezzybe.execute-api.ap-south-1.amazonaws.com/user/getuser", {
      method: "GET",
      headers: {
        "authToken": localStorage.getItem("usertoken")
      },
    });
    // eslint-disable-next-line
    const json = await response1.json();
    // console.log(json);
    const name01 = json.userRiddleIndex;
    setUserIndex(name01);
    // console.log(userIndex, "userIndex vct")
  }
  useEffect(() => {
    userdeatils();
    // eslint-disable-next-line
  }, [userIndex, setUserIndex]);


  let audio = new Audio(Sound)

  const handleNavigate = () => {
    navigate("/game/map", { replace: true });
    audio.play()
    audio.loop = true
  }
  const vctDate = new Date("feb 18, 2022 17:45:00").getTime();
  const nowVctDate = new Date().getTime();

  return (
    <>
      <div style={{
        backgroundImage: "url('https://raw.githubusercontent.com/TAdS-VCT/Media/main/BG%20images/VCT%20page.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        // paddingTop: '0',
        // paddingLeft: '6px',
        // paddingRight: '6px',
        marginTop: '0px',
        overflow: "hidden"
      }}>
       <Page title="TAds || VCT" style={{ marginTop: "0", }}>
          <div className="user_maindiv" >
            {((vctDate) <= (nowVctDate)) ? <div className='vct_details'>

              <button onClick={() => setModalShow(true)} className="modal_button">Instructions</button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              {((userIndex) <= 17) ? <button onClick={handleNavigate} className="button_vct">
                Let's Go!</button>
                :
                <button onClick={() => navigate("/", { replace: true })} className="button_vct">Let's Go!</button>
              }
            </div>
              : <div className='vct_details'> Please wait</div>}
          </div>
        </Page>
      </div>
    </>
  );
}
