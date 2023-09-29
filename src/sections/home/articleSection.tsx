import Article from "@/components/home/article";
import Title from "@/components/home/title";
import { Articles } from "@/constants/data";
import React from "react";

function ArticleSection() {
  return (
    <>
      <img
        src="/assets/images/content/bg.jpg"
        alt="bg"
        style={{ height: "60vh", width: "100%", objectFit: "cover" }}
      />
      <Title
        title="Articles & Tips"
        tagline="Explore some of the best tips from around the world"
      />
      <div className="home-container wrapper" style={{ marginBottom: 79 }}>
        {Articles.map((article, index) => (
          <Article
            image={article.image}
            date={article.date}
            title={article.title}
            shortDescription={article.shortDescription}
          />
        ))}
      </div>
    </>
  );
}

export default ArticleSection;
