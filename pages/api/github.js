async function gitHub(res) {
  const github = await fetch("https://api.github.com/users/boriskirov");

  const json = await github.json();
  const githubRepos = json.public_repos;

  return res.status(200).json({
    githubRepos,
  });
}

export default gitHub;
