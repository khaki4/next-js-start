import fetch from 'isomorphic-unfetch';

const Post = (props) => {
  console.log('post render')
  return (
    <div>
      <h1>{props.show.name}</h1>
      <img src={props.show.image.medium} alt=""/>
      <div dangerouslySetInnerHTML={{ __html: props.show.summary }} />
    </div>
  )
}

const fakeApiForPrefetchTest = async () => {
  await new Promise((resolve) => {
    setTimeout(() => { resolve('done') }, 2000)
  })
}

Post.getInitialProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post