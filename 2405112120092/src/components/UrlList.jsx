const UrlList = (props) => {
  const urlList = props.urlList;

  return (
    <ul>
      {urlList.map((el, index) => {
        return (
          <li key={index} id={index}>
            <div>
              <a href={el.url}>{el.url.slice(0, 100)}</a>
              <a href={el.shortUrl}>{el.shortUrl}</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default UrlList;
