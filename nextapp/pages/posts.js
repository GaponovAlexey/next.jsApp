import Head  from 'next/head';
import { MainLayout } from '../components/mainLayout';


export default function posts() {
	return (
		<MainLayout>
			<Head>
				<title>Post Page | next Curse</title>
			</Head>
			<h1> Post Page</h1>
		</MainLayout>

	)
}



