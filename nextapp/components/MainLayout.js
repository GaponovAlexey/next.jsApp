import Link from 'next/link';
import React from 'react';
import Head from 'next/head';



export function MainLayout({ children, title = 'next app' }) {
	return (<>
		<Head fixed>
			<title>{ title }</title>
			<meta name='keywords' content='next, js, nextjs' />
			<meta name='keywords' content='this is youtube totorial' />
			<meta charSet='utf-8' />
		</Head>
		<nav>
			<Link href={ '/' }><a>Home</a></Link>
			<Link href={ '/about' }><a>About</a></Link>
			<Link href={ '/posts' }><a>Posts</a></Link>
		</nav>
		<main>
			{ children }
		</main>
		<style jsx>{ `
			nav { position : absolute ; height: 20px; left: 0; right: 0; background: grey; display: flex;
			justify-content: space-around; align-items: top; }
			nav a {color: #fff; text-ecoration: none; }
			main {margin-top: -5px; padding; 2rem}
			`}</style>
	</>
	)
}