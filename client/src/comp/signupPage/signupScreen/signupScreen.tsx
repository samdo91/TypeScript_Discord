import styled from "@emotion/styled";
import React, { useState } from "react";
import BirthDate from "./birthDate";
import axios from "axios";
import SignupItemEmail from "./item/signupItemEmail";
import SignupItemNickname from "./item/signupItemNickname";
import SignupItemUserName from "./item/signupItemUserName";
import SignupPassword from "./item/signupItemPassword";

function SignScreen() {
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [years, setYears] = useState<string>("");
  const [months, setMonths] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [sendMail, setSendMail] = useState<boolean>(false);

  const formatNumber = (value: string): string => {
    const parsedValue = parseInt(value, 10);

    // 숫자가 NaN이거나 10 미만일 경우 앞에 0을 붙여서 반환
    if (!isNaN(parsedValue) && parsedValue < 10) {
      return `0${parsedValue}`;
    }

    // 그 외의 경우는 그대로 반환
    return value;
  };
  const handleCheckboxChange = () => {
    setSendMail((prevSendMail) => !prevSendMail);
  };

  const passwordTest = (str: string): boolean =>
    /^[a-zA-Z0-9_\uAC00-\uD7A3]{8,23}$/.test(str);

  const userNameTest = (str: string): boolean =>
    /^[a-zA-Z0-9_\uAC00-\uD7A3]+$/.test(str);

  const isRequiredFieldIndicator = (str: string): boolean => str.trim() !== "";
  const handleContinueButton = async () => {
    if (!userNameTest(userName)) {
      // 사용자에게 친화적인 오류 메시지를 표시하세요
      alert(
        "유효하지 않은 사용자 이름입니다. 영숫자 문자 및 밑줄(_)만 사용하세요."
      );
      return;
    }

    if (!passwordTest(password)) {
      // 사용자에게 친화적인 오류 메시지를 표시하세요
      alert(
        "유효하지 않은 암호입니다. 암호는 8-23자 여야하며 영숫자 문자 및 밑줄(_)만 사용하세요."
      );
      return;
    }

    if (!isRequiredFieldIndicator(years)) {
      alert("생년월일이 비어있어요.");
      return;
    } else if (!isRequiredFieldIndicator(months)) {
      alert("생년월일이 비어있어요.");
      return;
    } else if (!isRequiredFieldIndicator(days)) {
      alert("생년월일이 비어있어요.");
      return;
    }

    const newSignupData = {
      email: email,
      nickname: nickname,
      userName: userName,
      password: password,
      sendMail: sendMail,
      birthDate: years + formatNumber(months) + formatNumber(days),
    };

    try {
      // 암호를 저장하기 전에 서버에서 암호화 처리를 수행하세요
      const response = await axios.post(
        "http://localhost:3000/signup",
        newSignupData
      );

      console.log("서버 응답:", response.data);
      // React Router 또는 다른 적절한 방법을 사용하여 리디렉션 수행
    } catch (error: any) {
      console.error("서버로 데이터 전송 중 오류 발생:", error.message);
      // 서버에서의 다양한 오류 시나리오를 처리하고 사용자에게 친화적인 메시지를 제공하세요
    }
  };

  return (
    <SignScreens>
      <Title>계정만들기</Title>
      <SignupItemEmail email={email} setEmail={setEmail} />
      <SignupItemNickname nickname={nickname} setNickname={setNickname} />
      <SignupItemUserName userName={userName} setUserName={setUserName} />
      <SignupPassword password={password} setPassword={setPassword} />

      <ItemSection>
        <Label>
          <ItemName>생년월일</ItemName>
          <Star> * </Star>
        </Label>
        <BirthDate
          years={years}
          setYears={setYears}
          months={months}
          setMonths={setMonths}
          days={days}
          setDays={setDays}
        />
      </ItemSection>
      <Label>
        <Checkbox
          type="checkbox"
          checked={sendMail}
          onChange={handleCheckboxChange}
        />
        <div>
          Discord 소식, 도움말, 특별할인을 이메일로 보내주세요. 언젠든
          취소하실수 있습니다.
        </div>
      </Label>

      <ContinueButton onClick={handleContinueButton}>계속하기</ContinueButton>
    </SignScreens>
  );
}

export default SignScreen;

const SignScreens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const ItemSection = styled.div`
  margin: 15px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const ItemName = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  text-align: left;
`;
const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Star = styled.div`
  color: red;
  margin-left: 5px;
`;

const Checkbox = styled.input`
  width: 30px;
  height: 30px;
  appearance: none; /* 기본 checkbox 디자인 제거 */
  border: 2px solid #555; /* 테두리 추가 */
  border-radius: 4px; /* 원하는 border-radius 적용 */

  transition: background-color 0.3s ease; /* 전환 효과 추가 */

  &:checked {
    background-color: white;
  }

  &:hover {
    background-color: #ddd; /* 선택하지 않은 상태에서의 hover 효과 */
  }
`;

const ContinueButton = styled.button`
  width: 34vw;
  padding: 10px;
  box-sizing: border-box;
  font-size: 40px;
  border-radius: 4px;
  background-color: background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,9,121,0.8267682072829132) 27%, rgba(0,212,255,1) 100%); ;
`;
