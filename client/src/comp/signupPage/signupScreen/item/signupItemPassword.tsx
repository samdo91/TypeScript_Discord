import styled from "@emotion/styled";
import React, { useState } from "react";
import { interRequiredFieldIndicator } from "../../../../store/interface";

interface interItePassword {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface TipTextProps {
  isActive: boolean;
}
function SignupPassword({ password, setPassword }: interItePassword) {
  // 필드위에 커서가 올라갔을때 (포커스 되었을때)
  const [isFocused, setIsFocused] = useState(false);
  const [wrongNumber, setWrongNumber] = useState<boolean>(true);
  const [requiredFieldIndicator, setRequiredFieldIndicator] =
    useState<boolean>(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const isAlphaNumericUnderscore = (str: string): boolean =>
    /^[a-zA-Z0-9_\uAC00-\uD7A3]{8,23}$/.test(str);

  const isRequiredFieldIndicator = (str: string): boolean => str.trim() !== "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (isRequiredFieldIndicator(inputValue)) {
      setRequiredFieldIndicator(true);
    } else {
      setRequiredFieldIndicator(false);
    }
    if (isAlphaNumericUnderscore(inputValue)) {
      setWrongNumber(true);
      setPassword(inputValue);
    } else {
      setWrongNumber(false);
      setPassword(inputValue);
    }
  };
  return (
    <ItemSection>
      <Label>
        {requiredFieldIndicator ? (
          <ItemName requiredFieldIndicator={requiredFieldIndicator}>
            페스워드
          </ItemName>
        ) : (
          <ItemName requiredFieldIndicator={requiredFieldIndicator}>
            패스워드 -필수 사항
          </ItemName>
        )}
        <Star> * </Star>
      </Label>
      <Field
        type="password"
        value={password}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {isFocused ? (
        <TipText isActive={wrongNumber}>
          숫자, 문자, 밑줄(_)만 사용할 수 있어요. 8글자에서 23글자로 정해주세요.
        </TipText>
      ) : (
        ""
      )}
    </ItemSection>
  );
}

export default SignupPassword;
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

const TipText = styled.div<TipTextProps>`
  display: flex;
  margin: 10px;
  font-size: 15px;
  color: ${(props) => (props.isActive ? "white" : "red")};
`;
