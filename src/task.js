
const getID = () => {
  if (!localStorage["taskID"]) {
    localStorage["taskID"] = "0";
    console.log('taskID initiated to 0');
  }
  var id = (Number(localStorage["taskID"]) + 1);
  localStorage["taskID"] = id;
  return localStorage["taskID"]
}


const Task = function taskConstructor(obj){
  const getTime = () => obj.time; 
  const getTitle = () => obj.title || "no title"; 
  const getType = () => {
    if (obj.type == "deepWork"){
      return "full";
    } else if (obj.type == "shallowWork"){
      return "1/2";
    }
  }; 
  const getDescription = () => obj.description; 
  const isComplete = () => obj.completed || false ; 


  return {
    time: getTime(),
    title: getTitle(),
    type: getType(),
    description: getDescription(),
    completed: isComplete(),
    id: getID() };

};

export { Task }