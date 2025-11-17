
import ContactForm from "@/app/components/ContactForm"
import ContactFormFooter from "@/app/components/ContactFormFooter"
import SideBarBlog from "@/app/components/SideBarBlog"

import Link from "next/link"

export const metadata = {
  title: "Blog | My Company",
  description: "Latest news and articles from My Company.",
}

export default async function BlogPage() {

  

  const res = await fetch(
    "https://blog.4printus.com/wp-json/wp/v2/posts?_embed&per_page=10",
    { next: { revalidate: 0 } }, { cache: "no-store" }  // ⚡ SSR puro (sin cache)
  )
  const posts = await res.json()
  console.log (posts)


  return (
    <main>
      <section className=" lg:mb-16">
        <div className="bg-[#EFEEEE] lg:pb-16 pb-8 mt-[-190px] mb-6 pt-64">
        <div className="container flex flex-wrap lg:px-0 lg:pt-0">
          <h1 className="lg:text-[120px] text-[55px] font-bold uppercase lg:leading-[85px] leading-[55px] pb-8 lg:w-9/12 w-full relative lg:z-20 order-1 lg:order-0 px-6 lg:px-0">
                      <span className="text-4pblue">Our </span> 
                      <span className="text-4pred">Blog</span></h1>
          <div className="lg:w-5/12 w-full pe-8 order-2 px-6 lg:px-0">
            <p className="leading-[23px]"></p>
          </div>
        </div>

      </div>
      </section>

      <section className="container flex flex-wrap px-4 lg:px-0">
        <div className="lg:w-9/12">
          <div className="grid lg:grid-cols-3 grip-cols-1 gap-6">
            {posts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
              return(
              <article key={post.id}>
                {/* Imagen destacada */}
                {featuredImage ? (
                  <div
                    className="w-full h-40 bg-center bg-cover rounded-xl"
                    style={{ backgroundImage: `url(${post._embedded?.["wp:featuredmedia"]?.[0]?.source_url})` }}
                  ></div>
                ) : (
                  <div
                    className="w-full h-40 bg-center bg-cover rounded-xl"
                    style={{ backgroundImage: `url(./images/logo-white-lettering.svg)` }}
                  ></div>
                )}
                <Link href={`/blog/${post.slug}`}>
                  <h2
                    className="text-2xl text-4pblue hover:underline font-semibold pt-4"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </Link>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
              </article>
            )})}
          </div>
        </div>

        <SideBarBlog deskWidth={"lg:w-3/12"}/>
      </section>

      {/******************  Contact Form Section ****************************/}
      <ContactFormFooter />
    </main>
  )
}
