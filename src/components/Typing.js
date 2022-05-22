export default function Typing(props) {
 
    return(
      <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i>{props.from.name}</span>
        <span className="message-data-time">{props.time}</span>
      </div>
      <div className="typing">...</div>
    </li>
    )
  }