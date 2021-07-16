import Router from "next/router";
import React from "react";
import { MainLayout } from "../../components/mainLayout";

export default function about() {
	const hanelClick = () => {
		Router.push('/')
	}
	return (
		<MainLayout>
			<h1>About Page</h1>

			<button onClick={ hanelClick }>Go back to home</button>
			<button onClick={ () => Router.push('/posts') }>Go back to posts</button>
		</MainLayout>
	)
}