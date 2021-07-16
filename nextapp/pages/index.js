import Link from "next/link";
import Head from "next/head";
import { MainLayout } from "../components/mainLayout";

export default function index() {

	return (
		<>
			<MainLayout title={ 'home page' } >
				<div><br></br>
					<h1> Hello</h1>
					<p><Link href='/about'><a>hello Hext.js!</a></Link></p>
					<p><Link href='/posts'><a>POSSSTS</a></Link></p>
					<p>Lear idex.js from javascropt</p>
				</div>
			</MainLayout>
		</>
	)
}