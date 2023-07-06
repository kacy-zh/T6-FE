import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

import user_img from "./user.png";
import bot_img from "./bot.png";
import send from "./send.png";
import post from "./utils.js";

/**
 * Creates the bubble for the chat text.
 * @function
 * @param user Is this bubble for a user or for the bot?
 * @param text What text should be displayed?
 * @param visible Is this visible?
 */
function Bubble(user, text, visible) {
  const person = user ? "User" : "Bot";
  const image = user ? user_img : bot_img;
  if (visible)
    return (
      <div className={person}>
        <table>
          <tr>
            <td className="RightPad">
              <img src={image} alt={person} />
            </td>
            <td className="VertCenter">{text}</td>
          </tr>
        </table>
      </div>
    );
  else {
    return <></>;
  }
}

export function Chat() {
  const [input, setInput] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [history, setHistory] = useState([
    ["B", "Hello, please ask me any questions you have!", true],
  ]);

  const addNewBubble = (who, text, visible) =>
    setHistory((prevState, props) => [...prevState, [who, text, visible]]);

  const handleSubmit = (event) => {
    setDisabled(true);
    event.preventDefault();
    addNewBubble("U", input, input.trim() !== "");
    if (input !== "") {
      post(input).then((r) => addNewBubble("B", r.response, true));
    }
    document.getElementById("form").reset();
    setInput("");
    setDisabled(false);
  };

  return (
    <div>
      <div className="Chat">
        {history.map((content) =>
          Bubble(content[0] === "U", content[1], content[2])
        )}
        <div className="Blank"></div>
      </div>

      <div className="TextInput">
        <center>
          <form onSubmit={handleSubmit} id="form">
            <FormControl
              sx={{ m: 1, width: "90%" }}
              variant="outlined"
              type="text"
              onChange={(e) => setInput(e.target.value)}
              disabled={disabled}
            >
              <InputLabel htmlFor="message">Send a message</InputLabel>
              <OutlinedInput
                id="message"
                type="text"
                endAdornment={
                  <InputAdornment position="end" onClick={handleSubmit}>
                    <IconButton aria-label="Send message" edge="end">
                      <img src={send} alt="Send" />
                    </IconButton>
                  </InputAdornment>
                }
                label="Send a message"
              />
            </FormControl>
          </form>
        </center>
      </div>
    </div>
  );
}
