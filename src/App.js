
import image from "./cat.jpg";
import ReactPlayer from 'react-player'
import "./style.css";
function App() {
  return (
    <div className="App">
      <div
     
        style={{
          border: "solid",
          fontSize: 1,
          color: "black",
    maxWidth: "100vw",
        }}>
            

        <h1 className="title red">Your name here</h1>
        <br />
        <div className="image">
        <img  src={image} alt="fff"/>
        <br />
        <img src="volvo_s90_1.jpg" alt ="hsjc" />
        </div>
        <ReactPlayer width='480px' height='240px' controls url="https://youtu.be/e8WX2BnLO3U" />
</div>



</div>
);
}

export default App;