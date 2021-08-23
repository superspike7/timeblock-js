const Task = (obj) => {
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

  const getProps = () =>  {
    return {
     time: getTime(),
     title: getTitle(),
     type: getType(),
     description: getDescription(),
     completed: isComplete()
    }
  };
  

  return {
    getTime,
    getTitle,
    getDescription,
    getType,
    isComplete,
    getProps
  }

};

export { Task }