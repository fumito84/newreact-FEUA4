import Card from "../Card/Card";
import SecondCard from "../SecondCard/SecondCard";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="container">
        <div className="title">
            <div className="title-content">
                <h1>Title</h1>
                <div>
                    <p>Some about text</p>
                    <p>in two lines</p>  
                </div>
                <button>Button</button> 
            </div>
        </div>
        <div className="main">
            <h1 className="margin">Portfolio</h1>
            <p className="margin">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti rem odit suscipit corporis dicta recusandae magnam, modi nam. Explicabo non corrupti nisi quis soluta porro assumenda quas.</p>
            <div className="firstCard">
                <Card />
                <Card />
                <Card />
                <SecondCard />
                <SecondCard />
                <SecondCard />
            </div> 
        </div> 
    </div>
  )
}

export default Portfolio