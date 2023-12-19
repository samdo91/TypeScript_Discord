import styled from "@emotion/styled";
import React, { useState } from "react";
import BirthDate from "./birthDate";
import { interSignupData } from "../../../store/interface";
import axios from "axios";

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
  const handleContinueButton = async () => {
    const newSignupData = {
      email: email,
      nickname: nickname,
      userName: userName,
      password: password,
      sendMail: sendMail,
      birthDate: years + formatNumber(months) + formatNumber(days),
    };

    try {
      // 서버로 데이터를 전송하는 POST 요청
      const response = await axios.post(
        "http://localhost:3000/signup",
        newSignupData
      );

      // 서버 응답 출력
      console.log("Server response:", response.data);
      window.location.href = "/signupSucces";
    } catch (error: any) {
      // 여기서 `error`를 명시적으로 any 형식으로 선언
      // 오류 처리
      console.error("Error sending data to server:", error.message);
    }
  };
  return (
    <SignScreens>
      <Title>계정만들기</Title>

      <ItemSection>
        <Label>
          <ItemName>이메일</ItemName>
          <Star> * </Star>
        </Label>
        <Field
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </ItemSection>
      <ItemSection>
        <Label>
          <ItemName>별명</ItemName>
          <Star />
        </Label>
        <Field
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </ItemSection>
      <ItemSection>
        <Label>
          <ItemName>사용자명</ItemName>
          <Star> * </Star>
        </Label>
        <Field
          type="text"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </ItemSection>
      <ItemSection>
        <Label>
          <ItemName>비밀번호</ItemName>
          <Star> * </Star>
        </Label>
        <Field
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </ItemSection>

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

const Field = styled.input`
  width: 34vw;
  padding: 10px;
  box-sizing: border-box;
  font-size: 40px;
  border-radius: 4px;
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
