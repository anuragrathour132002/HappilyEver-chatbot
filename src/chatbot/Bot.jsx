import Chatbot, {
  createChatBotMessage,
  createClientMessage,
} from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./service/ActionProvider.jsx";
import MessageParser from "./service/MessageParser.jsx";
import config from "./service/config.js";
import "./Bot.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  updateStudentAge,
  updateStudentName,
} from "../features/StudentInfoSlice.js";

function clientChatCreate({ msg, setState }) {
  const userMessage = createClientMessage(msg);
  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, userMessage],
  }));
}

function BotChatCreate({ msg, widget, setState }) {
  const botMessage = createChatBotMessage(msg, { widget: widget });
  setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
}

export const CustomMessage = ({ setState }) => {
  const ref = useRef();

  const handleGotIt = () => {
    ref.current.style.display = "none";
    clientChatCreate({ msg: "Got It", setState });
    BotChatCreate({ msg: "Enter your name", widget: "Name", setState });
  };
  return (
    <>
      <button onClick={handleGotIt} ref={ref} className="got-it-button">
        Got It!
      </button>
    </>
  );
};

export function NameWidget({ setState }) {
  const [name, setName] = useState("");
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudentName(name));
    ref.current.style.display = "none";
    clientChatCreate({ msg: name, setState });
    BotChatCreate({ msg: "Enter your age", widget: "Age", setState });
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          ref={ref}
          className="input-name"
          type="text"
          placeholder="Enter Your name here"
          minLength={3}
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export function AgeWidget({ setState }) {
  const [nage, setAge] = useState(18);
  const age = new Array(23).fill("");
  const ref = useRef();
  const dispatch = useDispatch();
  const handleAge = (e) => {
    ref.current.style.display = "none";
    setAge(e.target.value);
    dispatch(updateStudentAge(e.target.value));
    clientChatCreate({ msg: e.target.value, setState });
    BotChatCreate({ msg: "Thanks", widget: "Redirect", setState });
  };
  return (
    <div>
      <select
        ref={ref}
        style={{
          width: "20%",
          textAlign: "center",
          cursor: "pointer",
          border: "1px solid #579edd",
          outline: "none",
          borderRadius: "8px",
          fontSize: "20px",
          color: "#579edd",
          backgroundColor: "white",
        }}
        value={nage}
        onChange={(e) => {
          handleAge(e);
        }}
      >
        {age.map((age, index) => {
          return (
            <option key={index} value={index + 18}>
              {index + 18}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export function RedirectWidget() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (count === 1) {
        navigate("/student/info");
      }
      if (count > 1) {
        setCount((count) => count - 1);
      }
    }, 1000);
  }, [count, navigate]);
  return (
    <div>
      <span className="countdown">{count}</span>
    </div>
  );
}


const Bot = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Bot;
