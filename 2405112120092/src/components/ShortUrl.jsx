import { useState } from "react";

const ShortUrl = () => {
  const [input, setInput] = useState("");

  function handleInput(e) {
    const { value } = e.target;
    setInput(value);
  }

  async function handleClick(props) {
    if (input == "") return;
    try {
      const response = await fetch(`${apiurl}/`, {
        method: "POST",
        body: JSON.stringify({ url: input }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.status == 404) {
        alert("not able to reach to server"), setInput("");
        return;
      }

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        setInput("");
        return;
      }

      const newItem = {
        url: input,
        justifyContent: "center",
        alignItem: "center",
      };

      props.addLink(newItem);
      setInput("");
    } catch (err) {
      alert("server error");
    }
  }
  return (
    <div>
      <form action="">
        <div>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <button onClick={handleClick} type="button">
          Short it!
        </button>
      </form>
    </div>
  );
};

export default ShortUrl;
