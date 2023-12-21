import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PersistentLogin from "../../store/persistentLogin/persistentLogin";

function ChannelsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // React Router에서 제공하는 useNavigate 훅은 함수형 컴포넌트 내에서 페이지 이동을 담당하는 훅
    navigate("/channels/@me", { replace: true });
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행되도록 함

  return (
    <div>
      <PersistentLogin />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default ChannelsPage;
