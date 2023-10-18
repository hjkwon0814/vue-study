const addOneItem = (state, todoItem) => {        
    const obj = {completed : false, item: todoItem};
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {        
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
  }
const toggleOneItem = (state, payload) => {
    this.todoItems[payload.index].completed = !this.todoItems[payload.index].completed;
    localStorage.removeItem(state.todoItems.item);
    localStorage.setItem(state.todoItems.item, JSON.stringify(state.todoItems));
  }
 const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
  }

  export { addOneItem, removeOneItem, toggleOneItem, clearAllItems}