import { myTravelsPictureData } from "../../data/myTravelsPictureData";
import "../components/Places.css";

export function Places() {
  return (
    <article className="picture-container">
      {myTravelsPictureData.map((item) => (
        <li key={item.id} className="picture-items">
          {/**  <h2 className="picture-title"> {item.title} </h2>*/}
          <br />
          <img src={item.image} alt={item.title} className="responsive-image" />
          <br />
          <p> {item.location} </p>
        </li>
      ))}
      {/** {console.log(myTravelsPictureData)}  */}
    </article>
  );
}
