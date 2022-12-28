import Sidebar from "../../sidebar/Sidebar"
import SinglePost from "../../singlepost/SinglePost"
import "./single.css"

const Single = () => {
  return (
    <div className="single">
        <SinglePost />
        <Sidebar />

    </div>
  )
}

export default Single