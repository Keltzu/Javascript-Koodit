const searchForm = document.getElementById("searchForm");
const queryInput = document.getElementById("query");
const resultsDiv = document.getElementById("results");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = queryInput.value.trim();
    if (!query) return;

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
        const data = await response.json();
        resultsDiv.innerHTML = '';

        if (data.length > 0) {
            data.forEach((tvShow) => {
                const article = document.createElement("article");

                const title = document.createElement("h2");
                title.textContent = tvShow.show.name;

                const link = document.createElement("a");
                link.href = tvShow.show.url;
                link.target = "_blank";
                link.textContent = "Details";

                const image = document.createElement("img");
                image.src = tvShow.show.image ? tvShow.show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
                image.alt = tvShow.show.name;

                const summary = document.createElement("div");
                summary.innerHTML = tvShow.show.summary || "No summary available.";

                article.appendChild(title);
                article.appendChild(link);
                article.appendChild(image);
                article.appendChild(summary);

                resultsDiv.appendChild(article);
            });
        } else {
            resultsDiv.innerHTML = '<p>No results found.</p>';
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});
