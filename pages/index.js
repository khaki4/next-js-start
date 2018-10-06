import Link from 'next/link'
import Header from '../components/Header'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <div>
    <Header />
    <p>Hello Next.js</p>
    <ul>
      <PostLink title={"hello"} />
      <PostLink title={"hello2"} />
      <PostLink title={"hello3"} />
    </ul>
  </div>
);