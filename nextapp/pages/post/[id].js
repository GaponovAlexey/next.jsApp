import { useRouter } from "next/dist/client/router"


export default function Post() {
	const router = useRouter()
	console.log(router);
	return <h1>post: {router.query.id}</h1>
}