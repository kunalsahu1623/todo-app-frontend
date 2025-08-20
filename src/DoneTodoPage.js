function DoneTodoPage(props) {
    let todoArr = props.todo;

    return (
        <div className="bg-purple-200 min-h-screen flex justify-center items-center p-6">
            <table className="table-auto border-collapse w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-purple-500 text-white">
                    <tr>
                        <th className="px-4 py-2 text-left">Todo Title</th>
                        <th className="px-4 py-2 text-left">Status</th>
                        <th className="px-4 py-2 text-left">Completed Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoArr.map((todo, index) => (
                            todo.status === "completed" && (
                                <tr key={todo.id} className="border-t hover:bg-purple-100 transition duration-200">
                                    <td className="px-4 py-2">{todo.todoTitle}</td>
                                    <td className="px-4 py-2 text-green-600 font-semibold">{todo.status}</td>
                                    <td className="px-4 py-2">{new Date(todo.completionDate).toLocaleDateString()}</td>
                                </tr>
                            )
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DoneTodoPage;