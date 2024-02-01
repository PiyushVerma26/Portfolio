const accessToken = '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';

export default async function handleApi() {
  try {
    const response = await fetch("https://api.github.com/users/piyushverma26/repos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error.message);
    throw error; // Rethrow the error for handling at a higher level if needed
  }
}
