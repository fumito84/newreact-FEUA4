import "./Card.css";
import sunflowers from '../Images/sunflowers.jpg'

function Card() {
  return (
    <div className="card">
        <img src={sunflowers} alt="" />
        <p>Ipsum Feugiat</p>
    </div>
  )
}

export default Card