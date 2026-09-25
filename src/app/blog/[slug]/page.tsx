import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Calendar, Share2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MagneticButton from "@/components/common/MagneticButton";
import { blogPosts, BlogPost } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | MightBeMedia",
    };
  }

  const absoluteImageUrl = `https://mightbemedia.in${post.coverImage}`;

  return {
    title: `${post.seoTitle} | MightBeMedia`,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, "MightBeMedia", "growth marketing", "web development", "SEO Delhi"],
    alternates: {
      canonical: `https://mightbemedia.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://mightbemedia.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: ["MightBeMedia"],
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [absoluteImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Article & Breadcrumbs Schema JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://mightbemedia.in/blog/${post.slug}#article`,
        headline: post.title,
        description: post.metaDescription,
        image: [`https://mightbemedia.in${post.coverImage}`],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          "@type": "Organization",
          name: "MightBeMedia",
          url: "https://mightbemedia.in/",
        },
        publisher: {
          "@type": "Organization",
          name: "MightBeMedia",
          url: "https://mightbemedia.in/",
          logo: {
            "@type": "ImageObject",
            url: "https://mightbemedia.in/logos/MightBeMedia_ICONNEW.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://mightbemedia.in/blog/${post.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://mightbemedia.in/blog/${post.slug}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://mightbemedia.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: "https://mightbemedia.in/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://mightbemedia.in/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <main className="relative bg-[#FFFFFF] text-[#0A0A0A] min-h-screen selection:bg-[#FF0000] selection:text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Persistent Navigation */}
      <Navbar />

      {/* Article Header & Breadcrumbs */}
      <article className="pt-36 sm:pt-44 pb-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2.5 font-mono text-xs text-[#0A0A0A]/50 mb-8 select-none">
            <Link href="/" className="hover:text-[#FF0000] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#FF0000] transition-colors">
              BLOG
            </Link>
            <span>/</span>
            <span className="text-[#FF0000] truncate max-w-[240px] sm:max-w-md font-semibold" title={post.title}>
              {post.title}
            </span>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="font-mono text-xs uppercase font-bold tracking-widest bg-[#FF0000] text-white px-3 py-1 rounded-xs">
              {post.category}
            </span>
          </div>

          {/* H1 Title */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#0A0A0A] leading-[1.04] mb-6">
            {post.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-black/[0.08] font-mono text-xs text-[#0A0A0A]/60 mb-10">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#FF0000]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#FF0000]" />
              <span>{post.readTime}</span>
            </div>
            <div className="ml-auto text-[#0A0A0A] font-semibold">
              BY MIGHTBEMEDIA RESEARCH
            </div>
          </div>

          {/* Editorial Cover Image */}
          <div className="relative w-full aspect-16/9 rounded-2xl overflow-hidden bg-black/5 mb-14 shadow-xl border border-black/10">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-top"
            />
          </div>

          {/* Article Introduction */}
          <div className="space-y-6 text-lg sm:text-xl font-sans text-[#0A0A0A]/85 leading-relaxed font-normal mb-12 border-b border-black/[0.08] pb-10">
            {post.content.introduction.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl sm:text-2xl font-medium text-[#0A0A0A]" : ""}>
                {p}
              </p>
            ))}
          </div>

          {/* Article Structured Body Sections */}
          <div className="space-y-14 font-sans text-[#0A0A0A]/80 leading-relaxed text-base sm:text-lg">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#0A0A0A] uppercase tracking-tight leading-tight">
                  {section.heading}
                </h2>

                {section.body.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {/* Subheadings if any */}
                {section.subheadings && (
                  <div className="space-y-8 pl-4 sm:pl-6 border-l-2 border-[#FF0000] my-8">
                    {section.subheadings.map((sub, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0A0A0A] uppercase tracking-tight">
                          {sub.subheading}
                        </h3>
                        {sub.body.map((subP, subPIdx) => (
                          <p key={subPIdx} className="text-sm sm:text-base text-[#0A0A0A]/70">
                            {subP}
                          </p>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Points */}
                {section.bulletPoints && (
                  <div className="p-6 sm:p-8 rounded-xl bg-[#FAFAFA] border border-black/[0.08] space-y-3 my-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
                      [STRATEGIC BENCHMARKS]
                    </span>
                    {section.bulletPoints.map((bp, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#FF0000] shrink-0 mt-1" />
                        <span className="text-sm sm:text-base text-[#0A0A0A]/90 font-medium">
                          {bp}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Takeaway Callout */}
                {section.keyTakeaway && (
                  <div className="p-6 rounded-xl bg-[#0A0A0A] text-white border-l-4 border-[#FF0000] my-8 space-y-2">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#FF0000] font-bold block">
                      KEY TAKEAWAY
                    </span>
                    <p className="font-sans text-base sm:text-lg text-white/90 font-medium">
                      {section.keyTakeaway}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Article Specific FAQs */}
          {post.content.faqs && post.content.faqs.length > 0 && (
            <div className="mt-16 pt-12 border-t border-black/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block mb-2">
                [FREQUENTLY ASKED QUESTIONS]
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#0A0A0A] uppercase tracking-tight mb-8">
                COMMON QUESTIONS ON THIS TOPIC
              </h3>
              <div className="space-y-6">
                {post.content.faqs.map((faq, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[#FAFAFA] border border-black/[0.08] space-y-2">
                    <h4 className="font-display font-bold text-lg text-[#0A0A0A]">
                      {faq.question}
                    </h4>
                    <p className="font-sans text-sm text-[#0A0A0A]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Article Conclusion */}
          <div className="mt-16 pt-10 border-t border-black/[0.08] space-y-4">
            <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-[#0A0A0A]">
              CONCLUSION
            </h3>
            {post.content.conclusion.map((p, i) => (
              <p key={i} className="text-base sm:text-lg text-[#0A0A0A]/80 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* In-Article Conversion CTA */}
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#0A0A0A] text-white text-center space-y-6 shadow-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF0000] font-bold block">
              [READY TO BUILD A SYSTEM THAT GROWS?]
            </span>
            <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight">
              STOP LOSING QUALIFIED TRAFFIC TO SLOW WEBSITES.
            </h3>
            <p className="font-sans text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
              Schedule a technical conversion audit with MightBeMedia and discover how our integrated engineering + marketing systems scale revenue.
            </p>
            <div className="pt-2">
              <MagneticButton
                href="/#contact"
                variant="red"
                cursorBadge="START"
                className="py-4 px-8 text-xs font-bold"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </MagneticButton>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-[#FAFAFA] border-t border-black/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-[#0A0A0A]">
              RELATED PERSPECTIVES
            </h3>
            <Link
              href="/blog"
              className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A] hover:text-[#FF0000] font-bold"
            >
              VIEW ALL ESSAYS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.slug}
                href={`/blog/${rPost.slug}`}
                className="group p-6 rounded-xl bg-white border border-black/[0.08] hover:border-[#FF0000] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-black/5 mb-4 shadow-xs">
                    <Image
                      src={rPost.coverImage}
                      alt={rPost.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="font-mono text-[11px] text-[#0A0A0A]/40 mb-2">
                    {rPost.category} • {rPost.readTime}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#0A0A0A] group-hover:text-[#FF0000] line-clamp-2 uppercase tracking-tight mb-2">
                    {rPost.title}
                  </h4>
                  <p className="font-sans text-xs text-[#0A0A0A]/60 line-clamp-2">
                    {rPost.excerpt}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-black/[0.06] flex items-center justify-between font-mono text-xs text-[#FF0000] font-bold">
                  <span>READ ESSAY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
