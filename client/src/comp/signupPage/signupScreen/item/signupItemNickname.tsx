import styled from "@emotion/styled";
import React, { useState } from "react";

interface interIteNickname {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

function SignupItemNickname({ nickname, setNickname }: interIteNickname) {
  // 필드위에 커서가 올라갔을때 (포커스 되었을때)
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <ItemSection>
      <Label>
        <ItemName>별명</ItemName>
        <Star />
      </Label>
      <Field
        type="text"
        value={nickname}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => {
          setNickname(e.target.value);
        }}
      />
      {isFocused ? (
        <TipText>
          다른 회원들에게 표시되는 이름이에요. 특수문자 이모지를 사용할 수
          있어요.
        </TipText>
      ) : (
        ""
      )}
    </ItemSection>
  );
}

export default SignupItemNickname;
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

const TipText = styled.div`
  display: flex;
  margin: 10px;
  font-size: 15px;
`;
