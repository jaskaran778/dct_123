// blog/[slug]/page.js
import BlogPost from "../BlogPost";

export default function BlogPostPage({ params }) {
  return <BlogPost slug={params.slug} />;
}
