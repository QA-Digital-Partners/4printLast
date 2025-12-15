export const dynamic = 'force-dynamic';

import ContactFormFooter from "@/app/components/ContactFormFooter"
import SideBarBlog from "@/app/components/SideBarBlog"
import * as cheerio from "cheerio";

export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const res = await fetch(`https://blog.4printus.com/wp-json/wp/v2/posts?slug=${slug}`, { cache: "no-store" }, { next: { revalidate: 0 } } )
  const data = await res.json()

  if (!data.length) return { title: "Post not found" }

  const post = data[0]
  const seo = post.yoast_head_json || {}

  return {
    title: seo.title || post.title.rendered,
    description: seo.description || post.excerpt.rendered,
    openGraph: {
      title: seo.og_title || post.title.rendered,
      description: seo.og_description || post.excerpt.rendered,
      url: seo.canonical,
      images: seo.og_image?.[0]?.url ? [{ url: seo.og_image[0].url }] : [],
      type: "article",
    },
    alternates: {
      canonical: seo.canonical,
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params; 
  const res = await fetch(
    `https://blog.4printus.com/wp-json/wp/v2/posts?slug=${slug}`,
    { cache: "no-store" }, { next: { revalidate: 0 } } // SSR
  )
  const data = await res.json()

  if (!data.length) return <h1>404 - Not Found</h1>

  const post = data[0]

// --- Procesar contenido con cheerio ---
  const $ = cheerio.load(post.content.rendered);
  const headings = [];

  $("h2, h3").each((_, el) => {
    const text = $(el).text();
    const id =
      $(el).attr("id") || text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
    $(el).attr("id", id); // agrega id a los encabezados
    headings.push({ id, text, level: el.tagName });
  });

  const updatedHTML = $.html();

 // --- Obtener imagen destacada ---
  let featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full?.source_url ||
    null;

  if (!featuredImage && post.featured_media) {
    const mediaRes = await fetch(
      `https://blog.4printus.com/wp-json/wp/v2/media/${post.featured_media}`,
      { cache: "no-store" }, { next: { revalidate: 0 } }
    );
    if (mediaRes.ok) {
      const media = await mediaRes.json();
      featuredImage = media.source_url;
    }
  }

  return (
    <>
    <section className="container">
      {/* Imagen destacada */}
        {featuredImage && (
          <img
            src={featuredImage}
            alt={post.title.rendered}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}
      <h1
        className="text-[50px] font-bold mb-6 leading-[52px] lg:max-w-[59%] mx-auto"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
    </section>
    <main className="container p-6 lg:p-0 ">
      <div className="flex flex-wrap lg:flex-nowrap">
        <aside className="lg:w-[18%] w-full lg:sticky self-start top-8 h-fit pb-16">
          <div className="overflow-y-auto lg:h-[55vh]">
            <h3 className="font-bold mb-4">Table of Contents</h3>
            <ul className="space-y-2 text-sm">
              {headings.map((h) => (
                <li key={h.id} className={h.level === "h3" ? "ml-4" : ""}>
                  <a href={`#${h.id}`} className="text-4pblue underline hover:text-4pred">
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <article className="lg:w-[56%] w-full lg:mx-[2%] lg:pb-16"> 
          <div
            className="prose max-w-none blog-post"
            dangerouslySetInnerHTML={{ __html: updatedHTML  }}
          />
        </article>

        <SideBarBlog deskWidth={"lg:w-[22%]"}/>

      </div>

      {/******************  Contact Form Section ****************************/}
      <ContactFormFooter />
    </main>
    </>
  )
}
