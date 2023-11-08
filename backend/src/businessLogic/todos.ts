import { v4 as uuid } from 'uuid';
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { TodoItem } from '../models/TodoItem'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import {
  getTodosByUserId,
  addTodoToDB,
  updateTodoToDB,
  deleteTodoFromDB,
  generateUploadURLToS3
} from '../dataLayer/todos'

export const getTodosForUser = async (userId: string) => {
  return await getTodosByUserId(userId);
};

// Function create todos
export const createTodo = async (newTodo: CreateTodoRequest, userId: string): Promise<TodoItem> => {
  const todo: TodoItem = newTodo as TodoItem;
  todo.userId = userId;
  todo.todoId = uuid();
  todo.createdAt = (new Date()).toLocaleString();

  await addTodoToDB(todo);

  return todo;
};

// Function update todos
export const updateTodo = async (userId: string, todoId: string, todo: UpdateTodoRequest) => {
  await updateTodoToDB(userId, todoId, todo);
};

// Function delete todos
export const deleteTodo = async (userId: string, todoId: string) => {
  await deleteTodoFromDB(userId, todoId);
};

// Function upload image
export const createAttachmentPresignedUrl = async (userId: string, todoId: string): Promise<string> => {
  return await generateUploadURLToS3(userId, todoId);
};