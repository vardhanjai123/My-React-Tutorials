import React, { useState } from 'react';
import './App.css';
import Person1 from './Person/Person';

const App = props => {
  const [personsState,setPersonsState] = useState(
    {
      persons: [
        {name:"jai",age:45},
        {name:"Adesh",age:29},
        {name:"anshuman",age:30}
      ]
      //otherstate:"This is other state"
    }
  );
const [myState,setMyState]=useState("This is the other state");
console.log(personsState,myState);
const switchnameHandler = () => {
//console.log("was clicked!");
//this.state.persons[0].name="Jaivardhan";
setPersonsState({
persons: [
  {name:"Mangal Pandey",age:52},
  {name:"Adesh",age:49},
  {name:"anshuman",age:50}
]
});
};

   return (
      <div className="App">
        <h1>Hi I am jai</h1>
        <h2>Its really working!</h2>
        <button onClick={switchnameHandler}>Switch Names</button>
        <Person1 name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person1 name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person1 name='Adesh' age="30"/>
        <Person1 name='Abhishek' age="32">I will be the Prime Minister of India</Person1>
        <Person1 name='Ashwini' age="33"/>
      </div>

    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi I am jai'));
}

export default App;
