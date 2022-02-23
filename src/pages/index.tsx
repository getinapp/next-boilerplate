import { useThemeContext } from 'context/ThemeContext';
import Head from 'next/head';

function Home() {
  const { toggleTheme } = useThemeContext();

  return (
    <>
      <Head>
        <title>Home | Next Boilerplate</title>
      </Head>

      <main>
        <p>Hello World!</p>

        <button type='button' onClick={toggleTheme}>
          Switch theme
        </button>
      </main>
    </>
  );
}

export default Home;
