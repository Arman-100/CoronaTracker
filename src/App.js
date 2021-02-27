import React from "react";

import UnitedStates from "./body/UnitedStates";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Alabama from "./body/statesFolder/alabama";
import Alaska from "./body/statesFolder/alaska";
import Arizona from "./body/statesFolder/arizona";
import Arkansas from "./body/statesFolder/arkansas";
import California from "./body/statesFolder/california";
import Colorado from "./body/statesFolder/colorado";
import Connecticut from "./body/statesFolder/connecticut";
import Delaware from "./body/statesFolder/delaware";
import Florida from "./body/statesFolder/florida";
import Georgia from "./body/statesFolder/georgia";
import Hawaii from "./body/statesFolder/hawaii";
import Idaho from "./body/statesFolder/idaho";
import Illinois from "./body/statesFolder/illinois";
import Indiana from "./body/statesFolder/indiana";
import Iowa from "./body/statesFolder/iowa";
import Kansas from "./body/statesFolder/kansas";
import Kentucky from "./body/statesFolder/kentucky";
import Lousiana from "./body/statesFolder/lousiana";
import Maine from "./body/statesFolder/maine";
import Maryland from "./body/statesFolder/maryland";
import Massachusetts from "./body/statesFolder/massachusetts";
import Michigan from "./body/statesFolder/michigan";
import Minnesota from "./body/statesFolder/minnesota";
import Mississippi from "./body/statesFolder/mississippi";
import Missouri from "./body/statesFolder/missouri";
import Montana from "./body/statesFolder/montana";
import Nebraska from "./body/statesFolder/nebraska";
import Nevada from "./body/statesFolder/nevada";
import NewHampshire from "./body/statesFolder/newhampshire";
import NewJersey from "./body/statesFolder/newjersey";
import NewMexico from "./body/statesFolder/newmexico";
import NewYork from "./body/statesFolder/newyork";
import NorthCarolina from "./body/statesFolder/northcarolina";
import NorthDakota from "./body/statesFolder/northdakota";
import Ohio from "./body/statesFolder/ohio";
import Oklahoma from "./body/statesFolder/oklahoma";
import Oregon from "./body/statesFolder/oregon";
import Pennsylvania from "./body/statesFolder/pennsylvania";
import RhodeIsland from "./body/statesFolder/rhodeisland";
import SouthCarolina from "./body/statesFolder/southcarolina";
import SouthDakota from "./body/statesFolder/southdakota";
import Tennessee from "./body/statesFolder/tennessee";
import Texas from "./body/statesFolder/texas";
import Utah from "./body/statesFolder/utah";
import Vermont from "./body/statesFolder/vermont";
import Virginia from "./body/statesFolder/virginia";
import Washington from "./body/statesFolder/washington";
import WestVirginia from "./body/statesFolder/westvirginia";
import Wisconson from "./body/statesFolder/wisconson";
import Wyoming from "./body/statesFolder/wyoming";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Header}></Route>
        <Route path="/" exact component={UnitedStates}></Route>
        <Route path="/UnitedStates" exact component={UnitedStates}></Route>
        <Route path="/Alabama" exact component={Alabama}></Route>
        <Route path="/Alaska" exact component={Alaska}></Route>
        <Route path="/Arizona" exact component={Arizona}></Route> 
        <Route path="/Arkansas" exact component={Arkansas}></Route>
        <Route path="/California" exact component={California}></Route> 
        <Route path="/Colorado" exact component={Colorado}></Route>
        <Route path="/Connecticut" exact component={Connecticut}></Route>
        <Route path="/Delaware" exact component={Delaware}></Route> 
        {/*<Route path="/DC" exact component={DC}></Route> */}
        <Route path="/Florida" exact component={Florida}></Route>
        <Route path="/Georgia" exact component={Georgia}></Route>
        <Route path="/Hawaii" exact component={Hawaii}></Route>
        <Route path="/Idaho" exact component={Idaho}></Route>
        <Route path="/Illinois" exact component={Illinois}></Route> 
        <Route path="/Indiana" exact component={Indiana}></Route> 
        <Route path="/Iowa" exact component={Iowa}></Route> 
        <Route path="/Kansas" exact component={Kansas}></Route> 
        <Route path="/Kentucky" exact component={Kentucky}></Route> 
        <Route path="/Lousiana" exact component={Lousiana}></Route> 
        <Route path="/Maine" exact component={Maine}></Route> 
        <Route path="/Maryland" exact component={Maryland}></Route> 
        <Route path="/Massachusetts" exact component={Massachusetts}></Route> 
        <Route path="/Michigan" exact component={Michigan}></Route> 
        <Route path="/Minnesota" exact component={Minnesota}></Route> 
        <Route path="/Mississippi" exact component={Mississippi}></Route> 
        <Route path="/Missouri" exact component={Missouri}></Route> 
        <Route path="/Montana" exact component={Montana}></Route> 
        <Route path="/Nebraska" exact component={Nebraska}></Route> 
        <Route path="/Nevada" exact component={Nevada}></Route> 
        <Route path="/NewHampshire" exact component={NewHampshire}></Route> 
        <Route path="/NewJersey" exact component={NewJersey}></Route> 
        <Route path="/NewMexico" exact component={NewMexico}></Route> 
        <Route path="/NewYork" exact component={NewYork}></Route> 
        <Route path="/NorthCarolina" exact component={NorthCarolina}></Route> 
        <Route path="/NorthDakota" exact component={NorthDakota}></Route> 
        <Route path="/Ohio" exact component={Ohio}></Route> 
        <Route path="/Oklahoma" exact component={Oklahoma}></Route> 
        <Route path="/Oregon" exact component={Oregon}></Route> 
        <Route path="/Pennsylvania" exact component={Pennsylvania}></Route> 
        <Route path="/RhodeIsland" exact component={RhodeIsland}></Route> 
        <Route path="/SouthCarolina" exact component={SouthCarolina}></Route> 
        <Route path="/SouthDakota" exact component={SouthDakota}></Route> 
        <Route path="/Tennessee" exact component={Tennessee}></Route> 
        <Route path="/Texas" exact component={Texas}></Route> 
        <Route path="/Utah" exact component={Utah}></Route> 
        <Route path="/Vermont" exact component={Vermont}></Route> 
        <Route path="/Virginia" exact component={Virginia}></Route> 
        <Route path="/Washington" exact component={Washington}></Route> 
        <Route path="/WestVirginia" exact component={WestVirginia}></Route> 
        <Route path="/Wisconson" exact component={Wisconson}></Route> 
        <Route path="/Wyoming" exact component={Wyoming}></Route>
        <Route path="/" component={Footer}></Route>
      </div>
    </Router>
  );
}

export default App;
