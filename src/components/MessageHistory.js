
import Message from './Message'
import Response from './Response'
import Typing from './Typing'

export default function MessageHistory(props) {
  const types = {
    message: Message,
    response: Response,
    typing: Typing
  }

  const {list} = props
  
  return(
    <ul>
      {list.map(item => {
        const Component = types[item.type]
        return(
          <Component 
            key={item.id}
            from={item.from}
            time={item.time}
            text={item.text}
          />
        )
      })}
    </ul>
  )
}