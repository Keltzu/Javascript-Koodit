const searchForm = document.getElementById("searchForm");
const queryInput = document.getElementById("query");
const resultsDiv = document.getElementById("results");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = queryInput.value.trim();
    if (!query) return;

    const apiUrl = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
        const data = await response.json();

        resultsDiv.innerHTML = ''; // Clear previous results

        if (data.result.length > 0) {
            data.result.forEach((joke) => {
                const article = document.createElement("article");
                const jokePara = document.createElement("p");
                jokePara.textContent = joke.value;

                article.appendChild(jokePara);
                resultsDiv.appendChild(article);
            });
        } else {
            resultsDiv.innerHTML = '<p>No jokes found for that search term.</p>';
        }
    } catch (error) {
        console.error("An error occurred:", error);
        resultsDiv.innerHTML = '<p>An error occurred while fetching jokes.</p>';
    }
});
