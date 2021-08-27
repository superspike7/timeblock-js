const sideNavComponent = (objs) => {
  const getListItems = () => {
    const list = document.createElement("ul");
    list.classList.add(
      "flex",
      "flex-col",
      "text-gray-800",
      "text-center",
      "text-2xl",
      "overflow-y-auto"
    );
    objs.forEach((obj) => {
      const item = document.createElement("li");
      const date = document.createElement("span");
      const removeBtn = document.createElement("span");
      const editBtn = document.createElement("span");

      item.classList.add("my-1", "flex", "justify-between");
      date.classList.add(
        "rounded-md",
        "px-2",
        `${obj.current ? "selected" : "not-selected"}`
      );
      removeBtn.classList.add(
        "remove-item-btn",
        "rounded-md",
        "px-2",
        "bg-red-500",
        "font-semibold",
        "text-white",
        "cursor-pointer",
        "hover:bg-red-800"
      );
      editBtn.classList.add(
        "edit-item-btn",
        "rounded-md",
        "px-2",
        "bg-blue-500",
        "font-semibold",
        "text-white",
        "cursor-pointer",
        "hover:bg-red-800"
      );

      date.setAttribute("value", obj.id);
      removeBtn.setAttribute("value", obj.id);
      editBtn.setAttribute("value", obj.id);

      date.innerText = obj.date;
      removeBtn.innerText = "x";
      editBtn.innerText = "edit";

      item.appendChild(date);
      item.appendChild(editBtn);
      item.appendChild(removeBtn);
      list.appendChild(item);
    });
    return list;
  };

  const renderList = () => {
    const nav = document.querySelector("#blocks-list");
    nav.innerHTML = "";
    nav.append(getListItems());
  };

  return {
    renderList,
  };
};

export { sideNavComponent };
