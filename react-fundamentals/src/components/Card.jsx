

function Card(props) {
  return (
  <div className="card">
        <img src={props.img}/>
        <h1>{props.user},{props.age}</h1>
        <p>{props.role}</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
