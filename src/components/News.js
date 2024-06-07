
const News = (props) => {
    let { title, description, imgUrl, url, author, date, source } = props;
    let formateDate = new Date(date);
    let auth = !author ? "Unknow" : author;
    return (
      <div className="col">
        <div className="card my-2" style={{ width: "18rem" }}>
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "80%", zIndex: 1 }}
          >
            {source}
          </span>
          <img
            src={
              !imgUrl
                ? "https://i.ndtvimg.com/i/2017-03/artificial-intelligence-generic_650x400_61488449453.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body bg-dark text-white">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-muted">
              By : {auth} |{formateDate.toGMTString()}
            </p>
            <a href={url} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default News;
