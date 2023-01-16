import { motion ,AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import AppState from '../context/appState';
import './../styles/index.scss'

function Ls({ Component, pageProps }) {
    const router = useRouter();
    return (
        <AppState>
            <AnimatePresence>
                <motion.div
                    key={router.route}
                    initial="initialState"
                    animate="animateState"
                    exit="exitState"
                    transition={{
                        duration: 0.75,
                    }}
                    variants={{
                        initialState: {
                            opacity: 0,
                        },
                        animateState: {
                            opacity: 1,
                        },
                        exitState: {
                        },
                    }}
                    className="base-page-size"
                >
                    <Component
                        { ...pageProps }
                    />
                </motion.div>
            </AnimatePresence>
        </AppState>
    )
}

export default Ls;