import React from "react";
import axios from "axios";

interface LogoutButtonProps {
  userId: string; // userId prop의 타입을 명시
}

const LogoutButton: React.FunctionComponent<LogoutButtonProps> = ({
  userId,
}) => {
  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/logout", {
        userId: userId,
      });

      if (response.data.status === "success") {
        console.log("Logout successful:", response.data.message);
        // 로그아웃 성공 시 필요한 동작 수행
      } else {
        console.error("Logout failed:", response.data.message);
        // 로그아웃 실패 시 필요한 동작 수행
      }
    } catch (error: any) {
      console.error("Error during logout:", error.message);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
