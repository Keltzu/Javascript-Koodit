async function fetchChuckNorrisJoke() {
    const apiUrl = "https://api.chucknorris.io/jokes/random";

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
        const data = await response.json();
        console.log(data.value);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

fetchChuckNorrisJoke();
