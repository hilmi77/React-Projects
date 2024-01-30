import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";

const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

interface User {
  name: string;
  email: string;
  age: number;
  street: string;
  phone: string;
  password: string;
  image: string;
}

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<User | null>(null);
  const [title, setTitle] = useState<string>("name");
  const [value, setValue] = useState<string>("random person");

  const getPerson = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const person = response.data.results[0];
      const { phone, email } = person;
      const { large: image } = person.picture;
      const { password } = person.login;
      const { first, last } = person.name;
      const { age } = person.dob;
      const {
        street: { number, name },
      } = person.location;

      const newPerson = {
        name: `${first} ${last}`,
        email,
        age,
        street: `${number} ${name}`,
        phone,
        password,
        image,
      };
      setPerson(newPerson);
      setLoading(false);
      setTitle("name");
      setValue(newPerson.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.classList.contains("icon")) {
      const newValue = e.currentTarget.dataset.label as keyof User;
      if (person && newValue) {
        setTitle(newValue);
        setValue(person[newValue].toString());
      }
    }
  };
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
