import { Fragment, useState } from 'react';

function LearnUseState() {
  /*
  //Basic
  // const [counter, setCounter] = useState(1);

  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  //   // setCounter(prevState => prevState + 1);
  // }

  // return (
  //   <div className="App">
  //     <h1>{counter}</h1>
  //     <button onClick={handleIncrease}>Click</button>
  //   </div>
  // );

  // const [user, setUser] = useState({
  //   name: "thinh",
  //   age: "23"
  // })

  // const handleUpdate = () => {
  //   // setUser({
  //   //   ...user,
  //   //   work: "IT"
  //   // })

  //   setUser((prev) => ({
  //     ...prev,
  //     work: "IT"
  //   }))
  // }

  // return (
    

  //   <div className='App'>
  //     <h1>{JSON.stringify(user)}</h1>
  //     <button onClick={handleUpdate}>UPDATE</button>
  //   </div>
  // )
  */

  /*
  //Random gift
  const [gift, setGift] = useState();

  const gifts = [
    "Arsenal Home Player Jersey shirt 2023/2024",
    "Macbook Pro 2023",
    "Winner X 2023"
  ];

  const handleGetGift = () => {
    const randomGift = Math.floor(Math.random() * gifts.length);
    setGift(gifts[randomGift]);
  }

  return (
    <div className="App">
      <h1>{gift || "No gift"}</h1>
      <button onClick={handleGetGift}>Get gift</button>
    </div>
  );
  */

  /*
  // Two way binding

  // const [input, setInput] = useState("");

  // console.log(input);

  // return (
  //   <Fragment>
  //     <input value={input} onChange={(e) => setInput(e.target.value)} />
  //     <button onClick={() => setInput("Nguyen Duy Thinh")}>Click</button>
  //   </Fragment>
  // )

  // const courses = [
  //   {
  //     id: 1,
  //     name: "HTML"
  //   },
  //   {
  //     id: 2,
  //     name: "CSS"
  //   },
  //   {
  //     id: 3,
  //     name: "JS"
  //   }
  // ];

  // const [check, setCheck] = useState("");

  // const handleSubmit = () => {
  //   console.log(check);
  // }

  // return (
  //   <div style={{padding: 32}}>
  //     {
  //       courses.map(course => (
  //         <div key={course.id}>
  //           <input type='radio' checked={check === course.name} onChange={() => setCheck(course.name)} /> {course.name}
  //         </div>
  //       ))
  //     }
  //     <button onClick={handleSubmit}>Submit</button>
  //   </div>
  // )
  */

  
  //To do list (useState)
  const [input, setInput] = useState("");
  const [jobs, setJobs] = useState(() => {
    let jobsStorage = localStorage.getItem("jobs");
    jobsStorage = JSON.parse(jobsStorage) ?? [];

    return jobsStorage;
  });

  const handleSubmit = () => {
    setJobs((prev => {
      const newJobs = [...prev, input];
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    }))
    setInput("");
  }

  return (
    <div style={{margin: 32}}>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <hr/>
      <ul>
        {
          jobs.map((job, idx) => <li key={idx}>{job}</li>)
        }
      </ul>
    </div>
  )
}

export default LearnUseState;
