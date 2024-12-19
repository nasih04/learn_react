import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="SpongeBOB" age={30} isStudent={false}/>
      <Student name="Nasih" age={20} isStudent={true}/>
      <Student name="Mubashir" age={21} isStudent={true}/>
      <Student name="Shifin" age={20} isStudent={true}/>
    </>
  )
}

export default App