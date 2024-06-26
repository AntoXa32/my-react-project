import Product from "../Product/Product";
import BookList from "../BookList/BookList";
import favouriteBooks from "../../favouriteBooks.json";
import Alert from "../Alert/Alert";
import UserMenu from "../UserMenu/UserMenu";
import CustomButton from "../CustomButton/CustomButton";
import ClickCounter from "../handleClick/handleClick";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import SearchBar from "../SearchBar/SearchBar";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import CoffeeSize from "../CoffeeSize/CoffeeSize";
import CheckBox from "../CheckBox/CheckBox";
import LogiFormControle from "../LoginFormControle/LoginFormControle";
import FeedbackForm from "../FeedbackForm/FeedbackForm";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleLogin = (userData) => {
    console.log(userData);
  };

  const [lang, setLang] = useState("uk");

  return (
    <>
      <UserMenu />
      <h1>Best selling</h1>

      <Product name="Tacos With Lime" price={10.99} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <h2>Books of the week</h2>
      <BookList books={favouriteBooks} />

      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <button onClick={(evt) => console.log(evt)}>Second button</button>
      <CustomButton message="Playing music!">Play some music</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <h1>Please login to your account!</h1>
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <CoffeeSize />
      <CheckBox />
      <LogiFormControle />
      <FeedbackForm />
    </>
  );
}
