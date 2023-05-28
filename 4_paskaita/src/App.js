import "./App.css";
import Product from "./components/Product/Product";
import Button from "./components/Button/Button";

function App() {
  return (
    <Product
      imageUrl="https://www.golfmk7.com/forums/index.php?attachments/wallpaper_calendar-2-jpg.269235/"
      title="Volkswagen GOLF MK2 2022 Calendar"
      price="10.00€"
      description={
        <div>
          12 unique designs
          <br />
          <br />
          All pieces are printed on heavyweight 200 mgs art paper.
          <br />
          <br />
          Limited to 50 pieces
          <br />
          <br />
          One size: 11.7x16.5 inch/(297x420mm)
        </div>
      }
      availability={
        <div>
          Availability: 10 in stock
          <div className="buttonDiv">
            <Button title="ADD TO CART" />
          </div>
        </div>
      }
      category="Category: Calendars"
    />
  );
}

export default App;
