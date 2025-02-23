import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Your Name",
      "jobTitle": "Your Job Title",
      "url": "https://your-portfolio.com",
      "sameAs": [
        "https://www.linkedin.com/in/yourprofile",
        "https://github.com/yourusername"
      ]
    });
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
    </div>
  );
}

export default App;
