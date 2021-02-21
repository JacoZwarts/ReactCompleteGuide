import React, { useEffect } from "react";
import classes from "./Cockpit.css";
const cockpit = (props) => {
  //This useEffect only executes when props.persons changes.
  // useEffect(()=> {
  //   console.log('[Cockpit.js] useEffect');
  //   //Send HTTP Request
  //   setTimeout(()=> {
  //     alert('Saved data to cloud');
  //   },1000);
  // },[props.persons]);

  //This useEffect will run on the first render and never again because it doesn't have any properties to bind to (The [] is empty)
  // useEffect(()=> {
  //   console.log('[Cockpit.js] useEffect');
  //   //Send HTTP Request
  //   setTimeout(()=> {
  //     alert('Saved data to cloud');
  //   },1000);
  // },[]);

  //This useEffect has a cleanUp function
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //Send HTTP Request
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);

    return () => {
      //This runs basically when the useEffect runs for the last time. This depends on the parameters in the [].
      //This useEffect will only run when the component is rendered and unmounted.
      console.log('[Cockpit.js] cleanup work in useEffect.');
    }
  },[]);

  //This useEffect will run for every update cicle because we don't provide any parameters
  useEffect(()=> {
    console.log('[Cockpit.js] 2de useEffect');

    return ()=> {
      console.log('[Cockpit.js] cleanup work in 2de useEffect');
    }
  });
  let btnClass = "";
  const assignedClasses = [];
  if (props.showPerson) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
