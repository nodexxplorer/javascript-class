import data from './components/data'
import './App.css'

function App() {
 
  return (
    <>
    <div>
      <h1>Staff Lists</h1>

     <div style={{
      display: 'flex', flexWrap: 'wrap', gap: "40px",
     }}>
       {data.map((data) => (
        <div key={data.id} style={{border: "1px solid white", textAlign: 'center', borderRadius: "20px", marginBottom: "15px", gap: "40px", backgroundColor: 'green', padding: "12px" }} className="user-card">
          <img style={
            {borderRadius: "100%", margin: "auto auto", width: "110px",height: "100px" }
          } src={data.photo} alt={data.name} className="user-photo" />
          <div>
            <h2>{data.name}</h2>
          <p>Company: {data.company}</p>
          <p>Position: {data.position}</p>
          <p>Address: {data.address}, {data.state}, {data.country}</p>
         
          </div>
        </div>
      ))}
     </div>
    </div>
    </>
  )
}

export default App
