const TimeBlock = (obj) => {
  const tasks = [];

  const getDate = () => obj.date;

  const range = () => {
    let arr = [];
    for(let i = Number(obj.wakeTime); i <= Number(obj.sleepTime); i++) {
      arr.push(i);
    }
    return arr;
  };

  const getTasks = () => {
    return tasks
  };

  const addTask = (taskObj) => {
    tasks.push(taskObj);
  };

  const getProps = () => {
    const tasksProps = tasks.map(task => task.getProps());
    return {
      date: getDate(),
      tasks: tasksProps,
      wakeTime: obj.wakeTime,
      sleepTime: obj.sleepTime,
      range: range()
    }
  };

  return {
    range,
    getTasks,
    addTask,
    getDate,
    getProps
  };
  
};

export { TimeBlock }