import { MainLayout } from "../../components/mainLayout"
import { useRouter } from "next/router"

export default function about() {
	const router = useRouter();
	console.log(router);
	return (
		<MainLayout>
			<h1>hello. it is hext.js!: {router.query.id}</h1>
		</MainLayout>
	)
}