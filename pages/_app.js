import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'src/redux/index';

export default function App({ Component, pageProps, session }) {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<SessionProvider session={session}>
						<Component {...pageProps} />
					</SessionProvider>
				</PersistGate>
			</Provider>
		</>
	);
}
