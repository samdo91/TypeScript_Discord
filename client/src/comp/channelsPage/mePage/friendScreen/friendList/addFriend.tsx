import { useAtom } from "jotai";
import React, { useState } from "react";
import { userDataAtom } from "../../../../../global/global";
import styled from "@emotion/styled";
import axios from "axios";

function AddFriend() {
  const [userData, setUserData] = useAtom(userDataAtom);
  const [currentFriendEmail, setCurrentFriendEmail] = useState<string>("");
  const [isfriendOrNot, setIsfriendOrNot] = useState<boolean | null>(null); // null로 초기화
  const handleAddFriend = async () => {
    try {
      const response = await axios.post("http://localhost:3000/addFriend", {
        currentFriendEmail,
        userId: userData._id,
      });

      // userData 업데이트
      setUserData(response.data.userData);

      // Handle the response based on the status and message
      console.log(response.data);
      setIsfriendOrNot(true);
    } catch (error) {
      console.error("Error adding friend:", error);
      setIsfriendOrNot(false);
    }
    console.log("userData", userData);
  };
  return (
    <AddFriends>
      <Title>친구 추가하기</Title>
      <Tip>Discord 사용자명을 사용하여 친구를 추가 할 수 있어요.</Tip>

      <SearchSection>
        <SearchBarSection>
          <SearchBar
            type="text"
            placeholder="Discord 사용자명을 사용하여 친구를 추가할 수 있어요."
            value={currentFriendEmail}
            onChange={(e) => {
              setCurrentFriendEmail(e.target.value);
            }}
          />
          <SearchButton
            disabled={!currentFriendEmail}
            currentFriendEmail={currentFriendEmail}
            onClick={handleAddFriend}
          >
            친구요청보내기
          </SearchButton>
        </SearchBarSection>
        {isfriendOrNot !== null && (
          <div>
            {isfriendOrNot
              ? `${currentFriendEmail}에게 성공적으로 친구요청을 보냈어요.`
              : "흠, 안되는군요. 사용자명을 올바르게 입력하였는지 확인하세요."}
          </div>
        )}
      </SearchSection>
    </AddFriends>
  );
}

export default AddFriend;

const AddFriends = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 30px;
  height: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Tip = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 5px;
  margin-left: 30px;
  height: 20px;
  font-size: 18px;
  color: #9e9e9e;
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SearchBarSection = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 90%;
  height: 80px;
  margin: 20px;
  box-shadow: 0.5px 1px 0 #3e3e3e;
  padding-left: 10px;
  border-radius: 10px;
  font-size: 25px;
  background-color: #2d2d2d;
  position: relative;
`;
const SearchBar = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: inherit;
  height: 100%;
  padding: 0;
  outline: none;
`;

const SearchButton = styled.button<{ currentFriendEmail: string }>`
  background-color: ${(props) =>
    props.currentFriendEmail ? "#18bc5d" : "#2A8229"};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 25px;
  filter: ${(props) => (props.currentFriendEmail ? "none" : "brightness(80%)")};
`;
