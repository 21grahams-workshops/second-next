import { useRouter } from 'next/router';

// my-domain.com/news/newsId

const Important = () => {

  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <h1>
    The Important Subsection of News Page
    </h1>
  )
}

export default Important;