import { useState } from 'react'
import { callCreateAPI, callGetAllAPI } from './BackendAPI'

function AddTodoPage(props) {
    let todo = props.todo;
    let setTodo = props.setTodo;

    let [formData, setFormData] = useState({
        todoTitle: '',
        dueDate: '',
        status: 'pending'
    })

    function handleChange(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;

        setFormData(prev => ({
            ...prev,
            [inputName]: inputValue
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        alert("form submitted, data = " + JSON.stringify(formData))

        let newTodo = {
            todoId: Date.now().toString(),
            todoTitle: formData.todoTitle,
            dueDate: formData.dueDate,
            status: 'pending'
        }
        await callCreateAPI('/create-todo', newTodo)

        // get our todo again
        const todoList = await callGetAllAPI('/read-todos')
        setTodo(todoList)
        
    }

    return (
        <div className="bg-gradient-to-r from-pink-200 to-pink-300 min-h-screen flex justify-center items-center">
            <form 
                onSubmit={(e) => handleSubmit(e)} 
                className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-semibold text-pink-700 text-center">Add New Todo</h2>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Todo Title</label>
                    <input
                        type="text"
                        placeholder="Enter your todo title"
                        name="todoTitle"
                        value={formData.todoTitle}
                        onChange={(e) => handleChange(e)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Due Date</label>
                    <input
                        type="date"
                        placeholder="Enter due date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={(e) => handleChange(e)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default AddTodoPage;