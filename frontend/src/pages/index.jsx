import React, { useState } from 'react';
import Cookies from 'js-cookie';

// Layout Design
import Layout from '../layout';

// Context
import { TodosProvider } from "../context/todosContext";
import { NotificationProvider } from "../context/notificationContext";

// Components
import TodoList from "../components/todo/TodoList";
import TodoTabs from "../components/todo/TodoTabs";

export default function Home() {

	// Get the username and password from cookies
	const userId = Cookies.get('userId');

	// Check if the values exist in cookies
	if (userId) {
		// Do something with the username and password
		console.log('userId:', userId);
	} else {
		// Handle the case when the values are not found in cookies
		console.log('Username and/or password not found in cookies');
	}

	const [ filterTodo, setFilterTodo ] = useState('all');

	return (
		<Layout>
			<div className='bg-white p-6 xl:py-9 rounded-lg shadow-lg'>

				{/* == Title == */}
				<h1 className="font-bold text-xl md:text-2xl xl:text-3xl text-center uppercase text-stone-600">My Tasks</h1>
				<hr className='my-6' />

				{/* == Tabs Todos Type == */}
				<TodoTabs filterName={setFilterTodo}/>

				{/* == Todos List == */}
				<TodosProvider>
					<NotificationProvider>
						<TodoList activeFilter={filterTodo}/>
					</NotificationProvider>
				</TodosProvider>
				
			</div>
		</Layout>
	)
}






