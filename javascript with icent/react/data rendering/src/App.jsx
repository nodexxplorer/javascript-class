// import data from './components/data'
import './App.css'
import Students from './components/students'

function App() {
 
  return (
    <>
    <h1>Today's class</h1>
    <h1>Props and Protype</h1>
  

    <Students name="fortune" age={20} isLoggedin={false} />

  {/* props are how data is passed from one component to another. there are read-only and allow the parent component to pass info to the child component. think of props as argument passed into a function. once the prop is passed, the child compomentcan be used but cant be modified directly. */}

    {/* <div>
      <h1>User Lists</h1>

      {data.map((data) => (
        <div key={data.id} style={{border: "1px solid white", borderRadius: "20px", marginBottom: "15px", gap: "40px", backgroundColor: 'green', padding: "12px", textAlign: "left" }} className="user-card">
          <img style={
            {borderRadius: "100%", width: "110px",height: "100px" }
          } src={data.photo} alt={data.name} className="user-photo" />
          <h2>{data.name}</h2>
          <p>Company: {data.company}</p>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Address: {data.address}, {data.state}, {data.country}, {data.zip}</p>
          <p>Phone: {data.phone}</p>
        </div>
      ))}
    </div> */}
    </>
  )
}

export default App
