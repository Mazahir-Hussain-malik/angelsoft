"use client"

import { motion } from "framer-motion"
import { Calendar, User, Folder, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"
import { HiUserCircle } from "react-icons/hi2";

interface BlogPost {
  date: string
  title: string
  description: string
  author: string
}

const blogPosts: BlogPost[] = [
  {
    date: "Jun, Thu, 2023",
    title: "New Angelsoft Solutions Website Launched!",
    description:
      "Angel Software Solutions was launched today. We are currently building the contents so please keep checking back for updates.",
    author: "angelsoft",
  },
  {
    date: "Feb, Fri, 2023",
    title: "How to Optimize Your SEO Market",
    description:
      "Forbade panther desolately iguanodon alas in goodness goodness re-laid when wishful but yet and trim hey went.",
    author: "angelsoft",
  },
  {
    date: "Feb, Fri, 2023",
    title: "Profitable business makes your profit",
    description:
      "Forbade panther desolately iguanodon alas in goodness goodness re-laid when wishful but yet and trim hey went.",
    author: "angelsoft",
  },
]

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="h-[420px] cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white p-8 shadow-[0_0_50px_-10px_rgba(0,0,0,0.1)] flex flex-col backface-hidden border border-gray-100"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center gap-2 text-[#2c4a6f] mb-6">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{post.date}</span>
          </div>

          <h4 className="text-[#937C39] text-2xl font-extrabold mb-4 leading-tight">{post.title}</h4>

          <p className="text-gray-500 text-base leading-relaxed mb-8 flex-grow">{post.description}</p>

          <div className="flex items-center gap-3 mt-auto">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center overflow-hidden shrink-0">
              <HiUserCircle className="w-12 h-12 text-[#666666]/40 translate-y-1" />
            </div>
            <span className="text-[#937C39] font-extrabold text-base">{post.author}</span>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-[#423F3B] p-8 shadow-[0_0_50px_-10px_rgba(0,0,0,0.1)] flex flex-col text-white backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="inline-flex items-center gap-2 mb-6 bg-[#555350] w-fit px-4 py-1.5 rounded-full">
            <Folder className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Business , Finance</span>
          </div>

          <h4 className="text-white text-2xl font-extrabold mb-4 leading-tight underline decoration-2 underline-offset-4 decoration-white/30">
            {post.title}
          </h4>

          <p className="text-white/90 text-base leading-relaxed mb-8 flex-grow">{post.description}</p>

          <div className="mt-auto">
            <button className="bg-[#2c4a6f] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1a3b61] transition-colors">
              Read More
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#2c4a6f] rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a3b61] transition-colors border-2 border-white"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </motion.button>
  )
}

export default function LatestBlog() {
  return (
    <section className="relative bg-[#fff] py-24 px-4 overflow-hidden min-h-screen">
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center max-w-7xl mx-auto">
        <div className="w-px h-full bg-gray-100 mx-auto absolute left-[33%]"></div>
        <div className="w-px h-full bg-gray-100 mx-auto absolute right-[33%]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#937C39] text-3xl font-extrabold  md:text-[44.5px]  mb-3 tracking-tight">Read Our Latest</h2>
          <h3 className="text-[#2c4a6f] text-3xl md:text-[44.5px] font-extrabold tracking-tight">Blog Posts</h3>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>

      <ScrollToTop />
    </section>
  )
}
