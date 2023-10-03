import * as React from "react";
import { useState, useEffect } from "react";
import MainMenu from "./main_menu";

export default function Home() {
  return (
    <div className="container flex justify-center mx-auto">
      <MainMenu />
    </div>
  );
}
