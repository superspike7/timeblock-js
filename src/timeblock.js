const getID = () => {
  if (!localStorage["blockID"]) {
    localStorage["blockID"] = "0";
    console.log('blockID initiated to 0');
  }
  var id = (Number(localStorage["blockID"]) + 1);
  localStorage["blockID"] = id;
  return localStorage["blockID"]
}

const TimeBlock = function timeBlockConstructor(obj) {
  const tasks = [];

  const getDate = () => obj.date;

  const range = () => {
    let arr = [];
    for(let i = Number(obj.wakeTime); i <= Number(obj.sleepTime); i++) {
      arr.push(i);
    }
    return arr;
  };

  const tasksProps = tasks.map(task => task.getProps());


  return {
    current: false,
    date: getDate(),
    tasks: tasksProps,
    wakeTime: obj.wakeTime,
    sleepTime: obj.sleepTime,
    range: range(),
    id: getID()
  };
  
};

export { TimeBlock }