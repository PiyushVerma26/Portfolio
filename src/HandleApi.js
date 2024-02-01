const accessToken = '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';

export default async function handleApi() {
  try {
    const response = await fetch("https://api.github.com/users/piyushverma26/repos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {

      console.log(response)
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error.message);
    throw error; // Rethrow the error for handling at a higher level if needed
  }
}
