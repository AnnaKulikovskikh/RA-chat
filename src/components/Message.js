export default function Message(props) {

    return(
      <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{props.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{props.from.name}</span>
        <i className="fa fa-circle me"></i>
      </div>
      <div className="message other-message float-right">
        {props.text}
      </div>
    </li>
    )
  }