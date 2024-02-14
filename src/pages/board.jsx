import "./style.css"
import Header from "../components/Header/Header";
import Leftside from "../components/Leftside/Leftside";
import BoardForm from '../components/popups/BordForm/BoardForm';
import ShowWarning from '../components/popups/ShowWarning/showWarning';
import TaskForm from '../components/popups/TaskForm/TaskForm';
import Rightside from "../components/Rightside/Rightside";
import { useData } from "../components/boardsContexts/boardsContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Board() {

  const navigate = useNavigate()

  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    console.log(user)
    if(!(user?.token)){
      navigate("/")
    }
  })
  
  const { theme,showBoardForm,showwarning,showTaskForm} = useData()


  return (
    <div className="App"  data-theme={theme}>
        <Header       /> 
        <Leftside    /> 
        <Rightside  />
        { showBoardForm.show && <BoardForm /> }
        { showwarning.show && <ShowWarning  /> }
        { showTaskForm.show && <TaskForm    />}
    </div>
  );
}

export default Board;
