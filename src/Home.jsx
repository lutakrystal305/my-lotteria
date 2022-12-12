import React, { useState, useEffect } from 'react';
import './Home.css';
import ModalCustom from './ModalCustom';
import classNames from 'classnames';
import rewardImg from './images/reward.png'

const Home = () => {
  const [members, setMembers] = useState([]);
  const [firstRewards, setFirstRewards] = useState([]);
  const [secondRewards, setSecondRewards] = useState([]);
  const [thirdRewards, setThirdRewards] = useState([]);
  const [fourthRewards, setFourthRewards] = useState([]);
  const [fifthRewards, setFifthRewards] = useState([]);
  const [subRewards, setSubRewards] = useState([]);
  const [numberOfMember, setNumberOfMember] = useState(200);
  const [numberOfFist, setNumberOfFirst] = useState(1);
  const [numberOfSecond, setNumberOfSecond] = useState(4);
  const [numberOfThird, setNumberOfThird] = useState(10);
  const [numberOfFourth, setNumberOfFourth] = useState(15);
  const [numberOfFifth, setNumberOfFifth] = useState(20);
  const [numberOfSub, setNumberOfSub] = useState(50);
  const [availMember, setAvilMember] = useState([]);
  const [check, setCheck] = useState(6);
  const [tempRes, setTempRes] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [startLotte, setStartLotte] = useState(false)

  const handleClickRandom = () => {
    setStartLotte(true)
    setTimeout(() => {
      handleRandom()
      setOpenModal(true)
      setStartLotte(false)
    }, 3000)
  }

  const handleRandom = () => {
    if (check <= 0) return;
    let amount;
    let result = [];
    switch (check) {
      case 1:
        amount = numberOfFist;
        break;
      case 2:
        amount = numberOfSecond;
        break;
      case 3:
        amount = numberOfThird;
        break;
      case 4:
        amount = numberOfFourth;
        break;
      case 5:
        amount = numberOfFifth;
        break;
      case 6:
        amount = numberOfSub;
        break;
      default:
        amount = numberOfSub;
        break;
    }
    for (let i = 0; i < amount; i++) {
      let i = 0;
      while (i < numberOfMember) {
        let a = Math.floor(Math.random() * 200) + 1;
        if (!result?.includes(a)) {
          const temp = availMember.filter((x) => x !== a);
          setAvilMember(temp);
          result.push(a);
          i = 201;
        } else {
          i++;
        }
      }
    }
    if (check === 1) {
      setFirstRewards(result);
      localStorage.setItem('first', JSON.stringify(result));
    }
    else if (check === 2) {

    setSecondRewards(result);
    localStorage.setItem('second', JSON.stringify(result));
    }
    else if (check === 3) {
      setThirdRewards(result);
      localStorage.setItem('third', JSON.stringify(result));
    }
    else if (check === 4) {
      setFourthRewards(result);
      localStorage.setItem('fourth', JSON.stringify(result));
    }
    else if (check === 5) {
      setFifthRewards(result);
      localStorage.setItem('fifth', JSON.stringify(result));
    }
    else { 
      setSubRewards(result);
      localStorage.setItem('sub', JSON.stringify(result));
    }
    setTempRes(result)
    setCheck(check - 1);
  };

  useEffect(() => {
    setAvilMember(
      Array(numberOfMember)
        .fill()
        .map((_, i) => i + 1)
    );
    const data = localStorage.getItem('data');
    let result;
    if (data) {
      result = JSON.parse(data);
    }
    if (result?.numberOfFist > 0) {
      setNumberOfFirst(result.numberOfFist);
    }
    if (result?.numberOfSecond > 0) {
      setNumberOfSecond(result.numberOfSecond);
    }
    if (result?.numberOfThird > 0) {
      setNumberOfThird(result.numberOfThird);
    }
    if (result?.numberOfFourth > 0) {
      setNumberOfFourth(result.numberOfFourth);
    }
    if (result?.numberOfFifth > 0) {
      setNumberOfFifth(result.numberOfFifth);
    }
    if (result?.numberOfSub > 0) {
      setNumberOfSub(result.numberOfSub);
    }
    // const first = JSON.parse(localStorage.getItem('first'))
    // setFirstRewards(result);
    // const second = JSON.parse(localStorage.getItem('second'))
    // const third = JSON.parse(localStorage.getItem('third'))
    // const fourth = JSON.parse(localStorage.getItem('fourth'))
    // const fifth = JSON.parse(localStorage.getItem('fifth'))
    // const sub = JSON.parse(localStorage.getItem('sub'))
  }, []);
  return (
    <div className="Home d-flex flex-column position-relative">
      <ModalCustom isOpen={openModal}>
        <div className="d-flex flex-column align-items-center position-relative">
          <img src={rewardImg} alt="reward" className='imgModalReward' />
          <h4 className='my-3 title-modal'>{check > 3 ? check + 'th' : check === 3 ? check + 'rd' : check === 2 ? check + 'nd' : check + "st"} Rewards</h4>
        <div className="d-flex flex-wrap overflow-hidden justify-content-center">
        {tempRes?.map((x, index) => (
          <div key={index} className="element-1 mx-2 my-2">
            {x}
          </div>
        ))}
        </div>
        <button className='btn-modal' onClick={() => setOpenModal(false)}>OK</button>
        </div>
      </ModalCustom>
      <div className="lotteria-container d-flex flex-column position-relative align-items-center justify-content-end">
        <h3 className='title-page'>Lotteria Random</h3>
      <div className="lotteria">
        <div className={classNames("circle-round-1", {'animate-circle-1' : startLotte})}></div>
        <div className={classNames("circle-round-2", {'animate-circle-2' : startLotte})}></div>
        <div className={classNames("circle-round-3", {'animate-circle-3' : startLotte})}></div>
        <div className={classNames("circle-round-4", {'animate-circle-4' : startLotte})}></div>
        <div className={classNames("circle-round-5", {'animate-circle-5' : startLotte})}></div>
      </div>
      
      <button className='btn-random' onClick={handleClickRandom}> Random </button>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-between position-relative">
      <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 position-relative ">
        <h3>1ST</h3>
        <div className="d-flex flex-wrap">
        {firstRewards?.map((x, index) => (
          <div key={index} className="element-1 mx-2 my-2">
            {x}
          </div>
        ))}
        </div>
      </div>
      <div className="container-reward justify-content-start d-flex  flex-column px-4 my-4 ">
        <h3>2nd</h3>
        <div className="d-flex flex-wrap">
        {secondRewards?.map((x, index) => (
          <div key={index} className="element-1 mx-2 my-2">
            {x}
          </div>
        ))}
        </div>
      </div>

      <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 ">
        <h3>3RD</h3>
        <div className="d-flex flex-wrap">
        {thirdRewards?.map((x, index) => (
          <div key={index} className="element-1 my-2 mx-2">
            {x}
          </div>
        ))}
        </div>
      </div>
      <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 ">
        <h3>4th</h3>
        <div className="d-flex flex-wrap">
        {fourthRewards?.map((x, index) => (
          <div key={index} className="element-1 my-2 mx-2">
            {x}
          </div>
        ))}
        </div>
      </div>
      <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 ">
        <h3>5th</h3>
        <div className="d-flex flex-wrap">
        {fifthRewards?.map((x, index) => (
          <div key={index} className="element-1 mx-2 my-2">
            {x}
          </div>
        ))}
        </div>
      </div>
      <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 ">
        <h3>Sub</h3>
        <div className="d-flex flex-wrap">
        {subRewards?.map((x, index) => (
          <div key={index} className="element-1 mx-2 my-2">
            {x}
          </div>
        ))}
        </div>
      </div>
      </div>
    </div>
  );
};
export default Home;
