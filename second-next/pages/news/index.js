import Link from "next/link";
import { Fragment } from "react";

// my-domain.com/news since this is a nested index (home) path inside of news folder inside of pages folder

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a great framework
          </Link>
        </li>
        <li>
          <Link href="/news/something-else">Something Else</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
