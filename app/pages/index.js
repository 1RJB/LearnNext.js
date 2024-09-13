import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi I am Ryan and I am currently a Diploma in Information Technology student at Nanyang Polytechnic. I have been learning programming for the last 3.5 years and I am familiar in developing applications using Python, JavaScript, and C# for my projects. And in the last 1.5 years alone I have developed 4 web applications for various projects.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}