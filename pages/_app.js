
import '@/styles/globals.css'

// import { FormProvider } from './FormContext';
import { FormProvider } from '@/FormContext';
function MyApp({ Component, pageProps }) {
  return (
    <FormProvider>
      <Component {...pageProps} />
    </FormProvider>
  );
}

export default MyApp;
