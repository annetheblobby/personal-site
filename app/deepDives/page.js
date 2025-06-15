'use client';
import * as React from "react";
import { useState } from "react";
import { ArticleCard } from "../components/ArticleCard";
import { CategoryNav } from "../components/CategoryNav";
import { FeaturedArticle } from "../components/FeaturedArticle";
import { blogs } from "../data/blogData";

const articles = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cecf65406c53598db7fc83bface85d9198ad2bb40a56503c00249ef9b6c1a2eb?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9",
    category: "Prototyping",
    title: "Lorem Ipsum kidem sulf",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cecf65406c53598db7fc83bface85d9198ad2bb40a56503c00249ef9b6c1a2eb?placeholderIfAbsent=true&apiKey=db0509071afd4813a2f67c2ecc9770f9",
    category: "Prototyping",
    title: "Lorem Ipsum kidem sulf",
  },
];

function DeepDivesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs = blogs.filter((blog) =>
    selectedCategory === "All" ? true : blog.category === selectedCategory
  );

  return (
    <div>
      <div className="flex flex-col items-center px-20 pt-40 max-md:px-5 max-md:py-24 mb-[1700px] max-md:mb-10">
        <div className="flex flex-col items-start max-w-full w-[895px]">
          <div className="flex flex-col items-start pr-20 max-w-full uppercase rounded-none text-zinc-800 w-[656px] max-md:pr-5">
            <div className="text-4xl font-extralight monoFont">Deep Dives</div>
            <div className="mt-3.5 text-6xl font-semibold max-md:text-4xl monoFont">
              let&apos;s get Specific.
            </div>
          </div>
          <div className="flex flex-col mt-32 w-full max-md:mt-10 max-md:max-w-full">
            <CategoryNav
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            <div className="flex flex-col mt-14 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
                {filteredBlogs.map((article) => {
                  return article.featured ? (
                    <FeaturedArticle
                      key={article.id}
                      image={article.coverImage}
                      category={article.category}
                      title={article.title}
                      tagline={article.tagline}
                      href={`/deepDives/${article.id}`}
                    />
                  ) : (
                    <ArticleCard
                      key={article.id}
                      image={article.coverImage}
                      category={article.category}
                      title={article.title}
                      href={`/deepDives/${article.id}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeepDivesPage;
