import styled from "@emotion/styled";
import React, { useState } from "react";

interface interItemEmail {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

interface interRequiredFieldIndicator {
  requiredFieldIndicator: boolean;
}

function SignupItemEmail({ email, setEmail }: interItemEmail) {
  // 필드위에 커서가 올라갔을때 (포커스 되었을때)
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [requiredFieldIndicator, setRequiredFieldIndicator] =
    useState<boolean>(true);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const isRequiredFieldIndicator = (str: string): boolean => str.trim() !== "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (isRequiredFieldIndicator(inputValue)) {
      setRequiredFieldIndicator(true);
      setEmail(inputValue);
    } else {
      setRequiredFieldIndicator(false);
      setEmail(inputValue);
    }
  };
  return (
    <ItemSection>
      <Label>
        {requiredFieldIndicator ? (
          <ItemName requiredFieldIndicator={requiredFieldIndicator}>
            이메일
          </ItemName>
        ) : (
          <ItemName requiredFieldIndicator={requiredFieldIndicator}>
            이메일 -필수 사항
          </ItemName>
        )}
        <Star> * </Star>
      </Label>
      <Field
        type="text"
        value={email}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {isFocused ? (
        <TipText>
          아이디를 만들어주세요 공백이나 특수문자는 사용할 수 없습니다.
        </TipText>
      ) : (
        ""
      )}
    </ItemSection>
  );
}

export default SignupItemEmail;

const ItemSection = styled.div`
  margin: 15px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const ItemName = styled.div<interRequiredFieldIndicator>`
  color: ${(props) => (props.requiredFieldIndicator ? "white" : "red")};
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
