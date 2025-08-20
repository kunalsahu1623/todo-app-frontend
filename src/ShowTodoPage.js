    import { callGetAllAPI, callUpdateAPI } from "./BackendAPI"

    function ShowTodoPage(props) {
        let todoArr = props.todo;
        console.log(JSON.stringify(todoArr))

        async function handleClick(e, todoId) {
            await callUpdateAPI(
                '/update-todo',
                { status: 'completed', completionDate: new Date() },
                { todoId: todoId }
            );

            let todoList = await callGetAllAPI('/read-todos');
            props.setTodo(todoList);
        }

        return (
            <div className="bg-purple-200 min-h-screen flex justify-center items-center p-6">
                <table className="table-auto border-collapse w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-purple-500 text-white">
                        <tr>
                            <th className="px-4 py-2 text-left">Todo Title</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Due Date</th>
                            <th className="px-4 py-2 text-left">Mark Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoArr.map((todo, index) => (
                                todo.status === "pending" && (
                                    <tr key={todo.todoId} className="border-t hover:bg-purple-100 transition duration-200">
                                        <td className="px-4 py-2">{todo.todoTitle}</td>
                                        <td className="px-4 py-2">{todo.status}</td>
                                        <td className="px-4 py-2">{new Date(todo.dueDate).toLocaleDateString()}</td>
                                        <td className="px-4 py-2">
                                            <button
                                                  onClick={(e) => handleClick(e, todo.todoId)}
                                                className="text-green-600 hover:text-green-800 transition duration-200"
                                            >
                                                ✅
                                            </button>
                                        </td>
                                    </tr>
                                )
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    export default ShowTodoPage;