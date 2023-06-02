import { getAllPosts } from '../lib/api'


export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="#us">About Us</a>
          <a href="/admin">Go to Admin Section</a>
        </nav>
        <div>
            <h1>Title</h1>
            <div id="us" class="images">
                <img src="1489697998-sardoche-copie.jpg"></img>
                <img src="1489697998-sardoche-copie.jpg"></img>
                <img src="1489697998-sardoche-copie.jpg"></img>
                <img src="1489697998-sardoche-copie.jpg"></img>
            </div>
        </div>
      <footer>
          <p>This is a demo of "".</p>
      </footer>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'createdAt',
    'slug',
    'author',
    'coverImage',
    'description',
  ])

  return {
    props: { allPosts },
  }
}
