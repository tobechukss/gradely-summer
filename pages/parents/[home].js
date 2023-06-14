import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import ParentPage from "../../src/components/layout/parent-page.layout";
import MainLayout from "../../src/components/layout/main-layout";
import Lander from "../../src/components/lander/lander";
export default function Home() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Head>
        <title>Gradely Summer School</title>
        <meta name="description" content="Summer school for gradely" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Lander />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <ParentPage>{page}</ParentPage>
    </MainLayout>
  );
};

export async function getStaticPaths() {
  // const { events_categories } = await import('/data/data.json');
  // const allPaths = events_categories.map((ev) => {
  //   return {
  //     params: {
  //       cat: ev.id.toString(),
  //     },
  //   };
  // });
  // console.log(allPaths);
  return {
    paths: [
      {
        params: {
          home: "home",
        },
      },
      {
        params: {
          home: "exam-prep",
        },
      },
      {
        params: {
          home: "tutoring",
        },
      },
      {
        params: {
          home: "extra-curricular",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context?.params.home;
  console.log("id is", id)
  const { hero_section } = await import('/data/data.json');

  const data = hero_section.filter((ev) => ev.id === id);
console.log("data is", data)
  return { props: { data, pageName: id } };

 
}
