import React from "react";
import styled from "styled-components";

export default function Nav() {
  return (
    <div>
      <StHome>Home</StHome>
      <StLogout>로그아웃</StLogout>
      <StProfile>내 프로필</StProfile>
    </div>
  );
}

const StHome = styled.button``;

const StLogout = styled.button``;

const StProfile = styled.button``;
