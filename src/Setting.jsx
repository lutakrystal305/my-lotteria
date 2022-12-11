import React, { useState } from 'react';

const Setting = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [numberOfMember, setNumberOfMember] = useState(200);
  const [numberOfFist, setNumberOfFirst] = useState(1);
  const [numberOfSecond, setNumberOfSecond] = useState(4);
  const [numberOfThird, setNumberOfThird] = useState(10);
  const [numberOfFourth, setNumberOfFourth] = useState(15);
  const [numberOfFifth, setNumberOfFifth] = useState(20);
  const [numberOfSub, setNumberOfSub] = useState(50);

  const [checkAuth, setCheckAuth] = useState(false);
  const admin = { email: 'admin123', password: '123456a' };
  const handleLogin = () => {
    if (email && password) {
      if (
        email.toLowerCase() === admin.email.toLowerCase() &&
        password.toLowerCase() === admin.password.toLowerCase()
      ) {
        setCheckAuth(true);
      }
    }
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleOnchangeFirst = (e) => {
    setNumberOfFirst(e.target.value);
  };
  const handleOnchangeSecond = (e) => {
    setNumberOfSecond(e.target.value);
  };
  const handleOnchangeThird = (e) => {
    setNumberOfThird(e.target.value);
  };
  const handleOnchangeFourth = (e) => {
    setNumberOfFourth(e.target.value);
  };
  const handleOnchangeFifth = (e) => {
    setNumberOfFifth(e.target.value);
  };
  const handleOnchangeSub = (e) => {
    setNumberOfSub(e.target.value);
  };

  const handleChangeMember = (e) => {
    setNumberOfMember(e.target.value)
  }
  const handleSubmit = () => {
    localStorage.setItem('data', JSON.stringify({ numberOfMember, numberOfFist, numberOfSecond, numberOfThird, numberOfFourth, numberOfFifth, numberOfSub}))
  }
  return (
    <div className="Setting">
      {checkAuth ? <form action="" className="setting-numbers-rewards d-flex flex-column justify-content-center align-items-center">
        <div className="input-container d-flex flex-column align-items-center my-4">
          <p>Number of First Rewards</p>
        <input
          type="text"
          name="first"
          disabled={true}
          className="my-2"
          value={numberOfFist}
          onChange={handleOnchangeFirst}
          placeholder="1st reward"
        />
        </div>
        <div className="input-container d-flex flex-column align-items-center my-4">
          <p>Number off Second Rewards</p>
          <input
          type="text"
          name="second"
          className="my-2"
          value={numberOfSecond}
          onChange={handleOnchangeSecond}
          placeholder="2st reward"
        />
        </div>
        <div className="input-container d-flex-flex-column align-items-center my-4">
          <p>Number of Third Rewards</p>
          <input
          type="text"
          name="third"
          className="my-2"
          value={numberOfThird}
          onChange={handleOnchangeThird}
          placeholder="3st reward"
        />
        </div>
        <div className="input-container d-flex flex-column align-items-center my-4">
          <p>Number of Fourth Rewards</p>
          <input
          type="text"
          name="fourth"
          className="my-2"
          value={numberOfFourth}
          onChange={handleOnchangeFourth}
          placeholder="4st reward"
        />
        </div>
        <div className="input-container d-flex flex-column align-items-center my-4">
          <p>Number of Fifth Reward</p>
          <input
          type="text"
          name="fifth"
          className="my-2"
          value={numberOfFifth}
          onChange={handleOnchangeFifth}
          placeholder="5st reward"
        />
        </div>
        <div className="input-container d-flex flex-column align-items-center my-4">
          <p>Number of Sub Rewards</p>
          <input
          type="text"
          name="sub"
          className="my-2"
          value={numberOfSub}
          onChange={handleOnchangeSub}
          placeholder="sub reward"
        />
        </div>
        <div className="input-container d-flex flex-column align-items-center my-4">
          <p>Number of Members</p>
          <input
          type="text"
          name="members"
          className="my-2"
          value={numberOfMember}
          onChange={handleChangeMember}
          placeholder="number of members"
          disabled={true}
        />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form> : <div className='d-flex flex-column'>
        <input
          type="text"
          value={email}
          className="my-4"
          placeholder="email"
          onChange={handleChangeEmail}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={handleChangePassword}
        />
        <button onClick={handleLogin}>Login</button>
      </div>}
    </div>
  );
};
export default Setting;
