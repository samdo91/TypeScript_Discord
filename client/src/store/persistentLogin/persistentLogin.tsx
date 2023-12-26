import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { loginStateAtom, userDataAtom } from "../../global/global";
import axios from "axios";

function PersistentLogin() {
  const [loginState, setLoginState] = useAtom(loginStateAtom);
  const [userData, setUserData] = useAtom(userDataAtom);

  const getCookie = (name: string) => {
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? match[2] : null;
  };
  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = getCookie("token");

      // 쿠키에 토큰이 없는 경우 로그인 페이지로 이동
      if (!token) {
        console.log("토큰 없음. 로그인 페이지로 이동");
        window.location.href = "/login";
        return;
      }

      try {
        // 쿠키에 저장된 토큰을 사용하여 /profile 엔드포인트로 요청 보내기
        const response = await axios.post(
          "http://localhost:3000/profile",
          { token },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // /profile 엔드포인트가 성공적으로 응답하는 경우
        console.log("User profile:", response.data);
        const useData = response.data;
        const myChannelDataCopy = [...response.data.meChannelData];
        const otherChannelDataCopy = [...response.data.friendList];
        const detailFriendListDataCopy = [
          ...response.data.detailFriendListData,
        ];
        setUserData({
          birthDate: useData.birthDate,
          email: useData.email,
          password: useData.password,
          nickname: useData.nickname,
          sendMail: useData.sendMail,
          userName: useData.userName,
          isOnline: true,
          _id: useData._id,
          detailFriendListData: detailFriendListDataCopy,
          meChannelData: myChannelDataCopy,
          friendList: otherChannelDataCopy,
        });
        setLoginState(true);
      } catch (error: any) {
        // Axios 에러 객체인 경우
        if (axios.isAxiosError(error)) {
          // 네트워크 에러인 경우
          if (error.response) {
            console.error("서버 응답 오류:", error.response.data);
          } else if (error.request) {
            console.error(
              "응답을 받지 못했습니다. 요청은 되었으나 응답이 없습니다."
            );
          } else {
            console.error("요청 설정 오류:", error.message);
          }
        } else {
          // Axios 에러가 아닌 경우
          console.error("Axios 이외의 에러:", error.message);
        }
      }
    };
    checkLoginStatus();
  }, []); // 빈 배열은 한 번만 실행되도록 함

  // checkLoginStatus 함수를 호출

  return <div></div>;
}

export default PersistentLogin;
