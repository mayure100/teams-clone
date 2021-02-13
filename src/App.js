import {ChatEngine} from 'react-chat-engine'
import LoginForm from './components/LoginForm'
import './App.css'
import ChatFeed from './components/ChatFeed'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return ( 
        <ChatEngine
        height='100vh'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        projectID='9c835370-61f1-4b05-82da-b9e64253c83a'
        renderChatFeed={(chatAppProps)=><ChatFeed  {...chatAppProps}/>}
    />
     );
}
 
export default App;

