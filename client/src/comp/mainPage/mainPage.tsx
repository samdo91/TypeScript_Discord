import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { loginStateAtom, userDataAtom } from "../../global/global";
import axios from "axios";
import MainHeader from "./mainHeader/mainHeader";
import PersistentLogin from "../../store/persistentLogin/persistentLogin";

function MainPage() {
  return (
    <div>
      <PersistentLogin />
      <header>
        <MainHeader />
      </header>
      MainPage
    </div>
  );
}

export default MainPage;
