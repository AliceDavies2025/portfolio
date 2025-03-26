import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import CaseStudy from '../../components/case_study';

// Updated case study data with more clarity on the file path
const caseStudies = [
  { 
    id: 'lightly',
    title: 'Lightly',
    imageUrl: '/images/lightly.png' // Ensure this file exists in the public/images directory
  }
];

export default function CaseStudyPage({ caseStudy }: { caseStudy: typeof caseStudies[0] }) {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  // Add console log to check what's being passed to the component
  console.log("Rendering case study:", caseStudy);

  return (
    <CaseStudy 
      imageUrl={caseStudy.imageUrl}
      title={caseStudy.title}
    />
  );
}

// Define getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = caseStudies.map(study => ({
    params: { id: study.id }
  }));
  
  console.log("Generated paths:", paths);
  
  return {
    paths,
    fallback: false // Change to false to immediately show 404 if not found
  };
};

// Define getStaticProps
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  console.log("Looking for case study with id:", id);
  
  const caseStudy = caseStudies.find(study => study.id === id);
  console.log("Found case study:", caseStudy);
  
  if (!caseStudy) {
    return {
      notFound: true
    };
  }

  return {
    props: { caseStudy }
  };
};
