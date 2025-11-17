import React from "react"
import { getLatestPosts } from "@/app/utils/wordpress"
import ContactFormBlog from "./ContactFormBlogs";

export default async function SideBarBlog( {deskWidth}) {

    const lastedPosts = await getLatestPosts()

  return (
    <>
        <aside className={`${deskWidth} w-full lg:pb-32 pb-16  sticky self-start top-8 h-fit`}>
          <div className="bg-white rounded-lg border-[1px] border-4plight-grey p-4 hidden lg:block">
            <p className="lg:text-[24px] lg:leading-[28px] font-bold ">Let's Start Your Project Today</p>
            <ContactFormBlog orientation=""/>
          </div>

          <div className="lg:px-8 lg:py-6 py-16">
            <div className="border-2 border-4pblue w-full"></div>
          </div>

          <div className="">
            <p className="text-[20px] font-bold pb-2">The most recent</p>
            {lastedPosts.map((post) => (
              <div key={post.id} className="mb-2">
                <a href={`/blog/${post.slug}`}>
                  <p
                    className="mb-0 lg:text-[16px]"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <span className="text-[14px] font-bold">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </aside>
    </>
  )
};

