import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/mainLayout";

export default function index() {

	return (
		<MainLayout>
		<h1>hello Hext.js!</h1>
		<Head>
			<title>Next title</title>
			<meta name='keywords' content='next, js, nextjs'/>
			<meta name='keywords' content='this is youtube totorial' />
			<meta charSet='utf-8'/>
		</Head>
		<p><Link href='/about'><a>hello Hext.js!</a></Link></p>
		<p><Link href='/posts'><a>POSSSTS</a></Link></p>
		<p>Lear idex.js from javascropt</p>
	</MainLayout>
		) 
}