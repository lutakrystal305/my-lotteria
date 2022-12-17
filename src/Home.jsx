import React, { useState, useEffect } from "react";
import "./Home.css";
import ModalCustom from "./ModalCustom";
import classNames from "classnames";
import rewardImg from "./images/reward.png";
import bg from "./images/bg.jpg";
import cat from './images/cat.png'

const numberOfRewards = 5;

const Home = () => {
  const [rewards, setRewards] = useState({
    spec: [],
    first: [],
    second: [],
    third: [],
    sub: [],
  });
  // const [firstRewards, setFirstRewards] = useState([]);
  // const [secondRewards, setSecondRewards] = useState([]);
  // const [thirdRewards, setThirdRewards] = useState([]);
  // const [fourthRewards, setFourthRewards] = useState([]);
  // const [fifthRewards, setFifthRewards] = useState([]);
  // const [subRewards, setSubRewards] = useState([]);
  const [numberOfMember, setNumberOfMember] = useState(200);
  const [numberOfFist, setNumberOfFirst] = useState(1);
  const [numberOfSecond, setNumberOfSecond] = useState(1);
  const [numberOfThird, setNumberOfThird] = useState(3);
  const [numberOfFourth, setNumberOfFourth] = useState(5);
  const [numberOfFifth, setNumberOfFifth] = useState(50);
  // const [numberOfSub, setNumberOfSub] = useState(50);
  const [availMember, setAvilMember] = useState([]);
  const [check, setCheck] = useState(numberOfRewards);
  const [tempRes, setTempRes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [startLotte, setStartLotte] = useState(false);
  const [isOpenModalSub, setIsOpenModalSub] = useState(false);
  const [rewardSaved, setRewardSaved] = useState([]);

  const handleClickRandom = () => {
    setStartLotte(true);
    setTimeout(() => {
      handleRandom();
      setOpenModal(true);
      setStartLotte(false);
    }, 3000);
  };

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
      // case 6:
      //   amount = numberOfSub;
      //   break;
      default:
        amount = numberOfFifth;
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
      setRewards({ ...rewards, spec: result });
      localStorage.setItem("spec", JSON.stringify(result));
    } else if (check === 2) {
      setRewards({ ...rewards, first: result });
      localStorage.setItem("first", JSON.stringify(result));
    } else if (check === 3) {
      setRewards({ ...rewards, second: result });
      localStorage.setItem("second", JSON.stringify(result));
    } else if (check === 4) {
      setRewards({ ...rewards, third: result });
      localStorage.setItem("third", JSON.stringify(result));
    } else {
      setRewards({ ...rewards, sub: result });
      localStorage.setItem("sub", JSON.stringify(result));
    }
    setTempRes(result);
    setCheck(check - 1);
  };

  const handleOpenModalSub = (x) => {
    switch (x) {
      case 0:
        setRewardSaved(rewards.spec);
        break;
      case 1:
        setRewardSaved(rewards.first);
        break;
      case 2:
        setRewardSaved(rewards.second);
        break;
      case 3:
        setRewardSaved(rewards.third);
        break;
      case 4:
        setRewardSaved(rewards.sub);
        break;
      default:
        break;
    }
    setIsOpenModalSub(true);
  };

  useEffect(() => {
    setAvilMember(
      Array(numberOfMember)
        .fill()
        .map((_, i) => i + 1)
    );
    const data = localStorage.getItem("data");
    let result;
    if (data) {
      result = JSON.parse(data);
    }
    if (result) {
      setRewards(result);
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
    <div className="Home d-flex justify-content-between align-items-center position-relative">
      <div className="img-bg">
        <img src={bg} alt="background" />
      </div>
      <ModalCustom isOpen={openModal}>
        <div className="d-flex flex-column align-items-center position-relative">
          <img src={rewardImg} alt="reward" className="imgModalReward" />
          <h4 className="my-3 title-modal">
            {check + 1 > 4
              ? "Lucky"
              : check === 3
              ? check + "rd"
              : check === 2
              ? check + "nd"
              : check === 1
              ? check + "st"
              : "Special"}{" "}
            Rewards
          </h4>
          <div className="d-flex flex-wrap overflow-hidden justify-content-center">
            {tempRes?.map((x, index) => (
              <div key={index} className="element-1 mx-2 my-2">
                {x}
              </div>
            ))}
          </div>
          <button className="btn-modal" onClick={() => setOpenModal(false)}>
            OK
          </button>
        </div>
      </ModalCustom>
      <ModalCustom isOpen={isOpenModalSub}>
        <div className="d-flex flex-column align-items-center position-relative">
          <img src={cat} alt="reward" className="imgModalReward" />
          <h4 className="my-3 title-modal">
          {rewardSaved?.length === numberOfFist ? "Special" : rewardSaved?.length === numberOfSecond ? "First" : rewardSaved?.length === numberOfThird ? "Second" : rewardSaved?.length === numberOfFourth ? "Third" : '"Lucky'}
            Rewards
          </h4>
          <div className="d-flex flex-wrap overflow-hidden justify-content-center">
            {rewardSaved?.length > 0 ? rewardSaved?.map((x, index) => (
              <div key={index} className="element-1 mx-2 my-2">
                {x}
              </div>
            )) : (
            <h6>No Reward available</h6>)
            }
          </div>
          <button className="btn-modal" onClick={() => setIsOpenModalSub(false)}>
            OK
          </button>
        </div>
      </ModalCustom>
      <div className="d-flex justify-content-between align-items-center position-relative w-100 h-100 body-container">
        <div className="lotteria-container d-flex flex-column position-relative align-items-center justify-content-end">
          <h3 className="title-page">Lotteria Random</h3>
          <div className="lotteria">
            <div
              className={classNames("circle-round-1", {
                "animate-circle-1": startLotte,
              })}
            ></div>
            <div
              className={classNames("circle-round-2", {
                "animate-circle-2": startLotte,
              })}
            ></div>
            <div
              className={classNames("circle-round-3", {
                "animate-circle-3": startLotte,
              })}
            ></div>
            <div
              className={classNames("circle-round-4", {
                "animate-circle-4": startLotte,
              })}
            ></div>
            <div
              className={classNames("circle-round-5", {
                "animate-circle-5": startLotte,
              })}
            ></div>
          </div>

          <button className="btn-random" onClick={handleClickRandom}>
            {" "}
            Random{" "}
          </button>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-between position-relative rewards">
          <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 position-relative mot-reward" onClick={() => handleOpenModalSub(0)}>
            <h3>Special Reward</h3>
            <div className="d-flex flex-wrap">
              {/* {firstRewards?.map((x, index) => (
                <div key={index} className="element-1 mx-2 my-2">
                  {x}
                </div>
              ))} */}
            </div>
          </div>
          <div className="container-reward justify-content-start d-flex  flex-column px-4 my-4 hai-reward" onClick={() => handleOpenModalSub(1)}>
            <h3>1st Rewards</h3>
            <div className="d-flex flex-wrap">
              {/* {/* {secondRewards?.map((x, index) => (
                <div key={index} className="element-1 mx-2 my-2">
                  {x}
                </div>
              ))} */}
            </div>
          </div>

          <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 ba-reward " onClick={() => handleOpenModalSub(2)}>
            <h3>2nd Rewards</h3>
            <div className="d-flex flex-wrap">
              {/* {thirdRewards?.map((x, index) => (
                <div key={index} className="element-1 my-2 mx-2">
                  {x}
                </div>
              ))} */}
            </div>
          </div>
          <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 bon-reward" onClick={() => handleOpenModalSub(3)}>
            <h3>3rd Rewards</h3>
            <div className="d-flex flex-wrap">
              {/* {fourthRewards?.map((x, index) => (
                <div key={index} className="element-1 my-2 mx-2">
                  {x}
                </div>
              ))} */}
            </div>
          </div>
          {/* <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 nam-reward">
            <h3>5th</h3>
            <div className="d-flex flex-wrap">
              {fifthRewards?.map((x, index) => (
                <div key={index} className="element-1 mx-2 my-2">
                  {x}
                </div>
              ))}
            </div>
          </div> */}
          <div className="container-reward justify-content-start d-flex flex-column px-4 my-4 phu-reward " onClick={() => handleOpenModalSub(4)}>
            <h3>Lucky Rewards</h3>
            <div className="d-flex flex-wrap">
              {/* {subRewards?.map((x, index) => (
                <div key={index} className="element-1 mx-2 my-2">
                  {x}
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
