import { loadList } from "../reducer/rdcUser";
import { loadListTodo } from "../reducer/rdcTodo";
import { message } from "antd";

export const loadDataUser = async (dispatch) => {
  var localData = localStorage.getItem("localData");
  if (!localData) {
    //triggerLoading();
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    success("Kullanıcı verisi yüklendi.");
    localStorage.setItem("localData", JSON.stringify(jsonData));
    dispatch(loadList(jsonData));
    //triggerLoading();
  } else {
    warning("Kullanıcı verisi localdatadan yüklendi.");
    dispatch(loadList(JSON.parse(localData)));
  }
};

export const loadDataTodo = async (dispatch) => {
  var localData = localStorage.getItem("localTodo");
  if (!localData) {
    //triggerLoading();
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonData = await response.json();
    success("Todos verisi yüklendi.");
    localStorage.setItem("localTodo", JSON.stringify(jsonData));
    dispatch(loadListTodo(jsonData));
    //triggerLoading();
  } else {
    warning("Todos verisi localdatadan yüklendi.");
    dispatch(loadListTodo(JSON.parse(localData)));
  }
};

const success = (string) => {
  message.success(string);
};

const error = () => {
  message.error("This is an error message");
};

const warning = (string) => {
  message.warning(string);
};
