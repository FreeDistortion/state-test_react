export default function Movie(props) {
  function myevent(event){
    event.preventDefault();
    // alert(title)
  }
  return (
    <div className="col-2">
      <div className="card" key={props.info.movieId} onClick={myevent}>
        <img className="card-img-top" src={props.info.url}></img>
        {/* <img src={props.url} alt={props.alt}/> */}
        <div className="card-body">
          <h5 className="card-title">{props.info.title}</h5>
            {/* <h5>{props.title}</h5> */}
        </div>
        <p className="card=text">{props.info.genre}</p>
        {/* <p>{props.genre}</p> */}
      </div>
      </div>
  );
}
