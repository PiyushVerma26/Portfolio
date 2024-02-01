const accessToken = import.meta.env.VITE_GITHUB_TOKEN

export default async function handleApi() {
	try {
		const response = await fetch("https://api.github.com/users/piyushverma26/repos", {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`)
		}

		return response.json()
	} catch (error) {
		console.error("Error fetching data from GitHub API:", error.message)
		throw error // Rethrow the error for handling at a higher level if needed
	}
}
