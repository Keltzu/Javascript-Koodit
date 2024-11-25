
const searchForm = document.getElementById("searchForm");
const queryInput = document.getElementById("query");


searchForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const query = queryInput.value.trim();

    /
    if (!query) {
        console.error("Please enter a TV series name.");
        return;
    }


    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {

        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }


        const data = await response.json();


        console.clear();
        if (data.length > 0) {
            console.log(`Search results for "${query}":`);
            data.forEach((item, index) => {
                console.log(`\nResult ${index + 1}`);
                console.log(`Title: ${item.show.name}`);
                console.log(`Genres: ${item.show.genres.join(", ")}`);
                console.log(`Language: ${item.show.language}`);
                console.log(`Premiered: ${item.show.premiered}`);
                console.log(`Summary: ${item.show.summary?.replace(/<[^>]*>/g, "") || "N/A"}`);
            });
        } else {
            console.log(`No results found for "${query}".`);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
});
