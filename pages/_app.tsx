
import {Global} from '../styles/globals'
import Layout from '../components/Layout';
import type { AppProps } from 'next/app'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	const [user, checkUser] = useState(false)

	return (
		<>
			<Global />
			<Layout user={user}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
export default MyApp
