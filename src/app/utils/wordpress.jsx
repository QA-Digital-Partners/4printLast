export async function getLatestPosts() {
  const res = await fetch(
    'https://blog.4printus.com/wp-json/wp/v2/posts?_embed&per_page=10',
    { cache: 'no-store' } // SSR: evita cache y fuerza renderizado del servidor
  )

  if (!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  const posts = await res.json()

  // Formatear los datos para uso más limpio
  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    date: post.date,
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
  }))
}
