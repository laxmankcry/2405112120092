import { useState } from "react";
import ShortUrl from "./ShortUrl";
import UrlList from "./UrlList";

const Main = () => {
  const [link, setLink] = useState([]);

  function addLink(newLink) {
    setLink((prev) => [...prev, newLink]);
  }

  function hideLink() {
    setLink([]);
  }

  return (
    <main>
      <ShortUrl addLink={addLink} />
      <UrlList urlList={link} />
      {link.length > 0 && <button onClick={hideLink}>Hide link</button>}
    </main>
  );
};

export default Main;
