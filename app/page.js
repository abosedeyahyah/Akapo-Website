import React from "react";
import HomePage from "./Components/HomePage";
import SavingsPage from "./Components/SavingsPage";
import TeamPage from "./Components/TeamPage";
import MembersPage from "./Components/MembersPage";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
export default function Home() {
  return (
<div>
<HomePage/>
<SavingsPage/>
<TeamPage/>
<MembersPage/>
<Footer/>
</div>
  );
}
