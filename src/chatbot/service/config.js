import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { AgeWidget, RedirectWidget, NameWidget, CustomMessage } from "../Bot";


const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "GotIt",
    }),
  ],
  widgets: [
    {
      widgetName: "GotIt",
      widgetFunc: (props) => <CustomMessage {...props} />,
    },
    {
      widgetName: "Age",
      widgetFunc: (props) => <AgeWidget {...props} />,
    },
    {
      widgetName: "Name",
      widgetFunc: (props) => <NameWidget {...props} />,
    },
    {
      widgetName: "Redirect",
      widgetFunc: (props) => <RedirectWidget {...props} />,
    },
  ],

};

export default config;
