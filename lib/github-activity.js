const GITHUB_USERNAME = "boriskirov";
const GITHUB_CHART_COLOR = "f06a8b";
const GITHUB_API_VERSION = "2022-11-28";
const RECENT_CONTRIBUTED_REPOSITORIES = [
  {
    nameWithOwner: "elastic/kibana",
    description: "Your window into all of your data",
    language: "TypeScript",
    stargazersCount: 21000,
    forksCount: 8500,
    visibility: "Public",
    url: "https://github.com/elastic/kibana",
  },
  {
    nameWithOwner: "elastic/eui",
    description: "Elastic UI Framework 🙌",
    language: "TypeScript",
    stargazersCount: 6300,
    forksCount: 866,
    visibility: "Public",
    url: "https://github.com/elastic/eui",
  },
];

const GITHUB_ACTIVITY_QUERY = `
  query GitHubActivity($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              color
            }
          }
        }
        issueContributions(first: 100) {
          nodes {
            occurredAt
            issue {
              number
              title
              url
              repository {
                nameWithOwner
              }
            }
          }
        }
        pullRequestContributions(first: 100) {
          nodes {
            occurredAt
            pullRequest {
              number
              title
              url
              repository {
                nameWithOwner
              }
            }
          }
        }
        pullRequestReviewContributions(first: 100) {
          nodes {
            occurredAt
            pullRequest {
              number
              title
              url
              repository {
                nameWithOwner
              }
            }
          }
        }
        commitContributionsByRepository(maxRepositories: 25) {
          repository {
            nameWithOwner
            isPrivate
            url
          }
          contributions(first: 100) {
            nodes {
              commitCount
              occurredAt
              url
            }
          }
        }
      }
    }
  }
`;

function getGraphImageUrl(username = GITHUB_USERNAME) {
  return `https://ghchart.rshah.org/${GITHUB_CHART_COLOR}/${username}`;
}

function getFirstCommitMessage(commits = []) {
  const firstCommit = commits.find((commit) => commit?.message?.trim());
  return firstCommit?.message?.trim() || null;
}

function getCommitHeadline(message) {
  return message?.split("\n")[0]?.trim() || "Direct commit";
}

function splitRepoNameWithOwner(nameWithOwner) {
  const [owner, repo] = (nameWithOwner || "").split("/");
  if (!owner || !repo) return null;
  return { owner, repo };
}

function isOwnRepository(nameWithOwner) {
  const repoParts = splitRepoNameWithOwner(nameWithOwner);
  if (!repoParts) return false;

  return repoParts.owner.toLowerCase() === GITHUB_USERNAME.toLowerCase();
}

function isMergeCommit(commit) {
  const headline = commit?.commit?.message?.split("\n")[0]?.trim() || "";
  return (commit?.parents?.length ?? 0) > 1 || headline.startsWith("Merge ");
}

function parseRepositoryNameFromApiUrl(repositoryUrl) {
  const match = repositoryUrl?.match(/\/repos\/([^/]+\/[^/]+)$/);
  return match?.[1] || "Unknown repository";
}

function capitalize(value = "") {
  if (!value) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function getGitHubHeaders(token, extra = {}) {
  return {
    Accept: "application/vnd.github+json",
    "User-Agent": "boris-kirov-portfolio",
    "X-GitHub-Api-Version": GITHUB_API_VERSION,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...extra,
  };
}

function dedupeItems(items) {
  const seen = new Set();

  return items.filter((item) => {
    const key = item.url || item.id;
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function limitActivityItems(items, maxTotalItems = 120, maxCommitItems = 48) {
  const sortedItems = [...items].sort(
    (a, b) => new Date(b.occurredAt) - new Date(a.occurredAt),
  );
  const result = [];
  let commitCount = 0;

  for (const item of sortedItems) {
    if (item.type === "commit" && commitCount >= maxCommitItems) {
      continue;
    }

    result.push(item);

    if (item.type === "commit") {
      commitCount += 1;
    }

    if (result.length >= maxTotalItems) {
      break;
    }
  }

  return result;
}

function getCommitRepositoryEntries(collection) {
  return (collection.commitContributionsByRepository ?? [])
    .map((entry) => ({
      isPrivate: entry.repository?.isPrivate ?? null,
      nameWithOwner: entry.repository?.nameWithOwner,
      latestOccurredAt:
        (entry.contributions?.nodes ?? [])
          .map((node) => node?.occurredAt)
          .filter(Boolean)
          .sort((a, b) => new Date(b) - new Date(a))[0] ?? null,
    }))
    .filter(
      (entry) =>
        entry.nameWithOwner &&
        entry.latestOccurredAt &&
        (!entry.isPrivate || isOwnRepository(entry.nameWithOwner)),
    )
    .sort((a, b) => new Date(b.latestOccurredAt) - new Date(a.latestOccurredAt));
}

function formatGraphqlItems(
  collection,
  { commitItems = null, pullRequestItems = null } = {},
) {
  const graphqlPullRequests = (collection.pullRequestContributions?.nodes ?? [])
    .filter((node) => node?.pullRequest?.url)
    .map((node) => ({
      id: `pr-${node.pullRequest.url}`,
      type: "pr",
      typeLabel: "PR",
      label: `Opened PR #${node.pullRequest.number}`,
      title: node.pullRequest.title,
      repo: node.pullRequest.repository?.nameWithOwner ?? "Unknown repository",
      url: node.pullRequest.url,
      occurredAt: node.occurredAt,
    }));

  const pullRequests = dedupeItems([
    ...(pullRequestItems ?? []),
    ...graphqlPullRequests,
  ]);

  const issues = (collection.issueContributions?.nodes ?? [])
    .filter((node) => node?.issue?.url)
    .map((node) => ({
      id: `issue-${node.issue.url}`,
      type: "issue",
      typeLabel: "Issue",
      label: `Opened issue #${node.issue.number}`,
      title: node.issue.title,
      repo: node.issue.repository?.nameWithOwner ?? "Unknown repository",
      url: node.issue.url,
      occurredAt: node.occurredAt,
    }));

  const reviews = (collection.pullRequestReviewContributions?.nodes ?? [])
    .filter((node) => node?.pullRequest?.url)
    .map((node) => ({
      id: `review-${node.pullRequest.url}-${node.occurredAt}`,
      type: "review",
      typeLabel: "Review",
      label: `Reviewed PR #${node.pullRequest.number}`,
      title: node.pullRequest.title,
      repo: node.pullRequest.repository?.nameWithOwner ?? "Unknown repository",
      url: node.pullRequest.url,
      occurredAt: node.occurredAt,
    }));

  const commits =
    commitItems ??
    (collection.commitContributionsByRepository ?? []).flatMap((entry) =>
      (entry.contributions?.nodes ?? [])
        .filter((node) => node?.occurredAt && node?.commitCount > 0)
        .map((node) => ({
          id: `commit-${entry.repository?.nameWithOwner}-${node.occurredAt}`,
          type: "commit",
          typeLabel: "Commit",
          label:
            node.commitCount === 1 ? "1 commit" : `${node.commitCount} commits`,
          title: "Default branch activity",
          repo: entry.repository?.nameWithOwner ?? "Unknown repository",
          url:
            node.url ||
            entry.repository?.url ||
            `https://github.com/${GITHUB_USERNAME}`,
          occurredAt: node.occurredAt,
        })),
    );

  return limitActivityItems([...pullRequests, ...issues, ...reviews, ...commits]);
}

function formatPublicEvent(event) {
  if (!event?.created_at || !event?.repo?.name) return null;

  const repo = event.repo.name;
  const repoUrl = `https://github.com/${repo}`;

  switch (event.type) {
    case "PushEvent": {
      const commitCount = event.payload?.size || event.payload?.commits?.length || 0;
      if (commitCount <= 0) return null;

      const commitMessage = getFirstCommitMessage(event.payload?.commits);
      return {
        id: event.id,
        type: "commit",
        typeLabel: "Commit",
        label: commitCount === 1 ? "1 commit" : `${commitCount} commits`,
        title: commitMessage,
        repo,
        url: repoUrl,
        occurredAt: event.created_at,
      };
    }
    case "PullRequestEvent": {
      if (event.payload?.action !== "opened") return null;
      const pullRequest = event.payload.pull_request;
      return {
        id: event.id,
        type: "pr",
        typeLabel: "PR",
        label: `Opened PR #${pullRequest?.number ?? ""}`.trim(),
        title: pullRequest?.title || "Pull request",
        repo,
        url: pullRequest?.html_url || repoUrl,
        occurredAt: event.created_at,
      };
    }
    case "IssuesEvent": {
      if (event.payload?.action !== "opened") return null;
      const issue = event.payload.issue;
      return {
        id: event.id,
        type: "issue",
        typeLabel: "Issue",
        label: `Opened issue #${issue?.number ?? ""}`.trim(),
        title: issue?.title || "Issue",
        repo,
        url: issue?.html_url || repoUrl,
        occurredAt: event.created_at,
      };
    }
    case "PullRequestReviewEvent": {
      const pullRequest = event.payload?.pull_request;
      return {
        id: event.id,
        type: "review",
        typeLabel: "Review",
        label: pullRequest?.number
          ? `Reviewed PR #${pullRequest.number}`
          : "Reviewed pull request",
        title: pullRequest?.title || "Pull request review",
        repo,
        url: pullRequest?.html_url || repoUrl,
        occurredAt: event.created_at,
      };
    }
    default:
      return null;
  }
}

async function fetchDirectCommitsForRepository(nameWithOwner, token, since) {
  const repoParts = splitRepoNameWithOwner(nameWithOwner);
  if (!repoParts) return [];

  const { owner, repo } = repoParts;
  const commitsResponse = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?author=${GITHUB_USERNAME}&since=${encodeURIComponent(
      since,
    )}&per_page=10`,
    {
      headers: getGitHubHeaders(token),
    },
  );

  if (!commitsResponse.ok) {
    throw new Error(
      `GitHub commits request failed for ${nameWithOwner} with ${commitsResponse.status}`,
    );
  }

  const commits = await commitsResponse.json();

  const directCommitItems = await Promise.all(
    commits
      .filter((commit) => commit?.sha && !isMergeCommit(commit))
      .map(async (commit) => {
        const pullsResponse = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/commits/${commit.sha}/pulls`,
          {
            headers: getGitHubHeaders(token, {
              Accept: "application/vnd.github+json",
            }),
          },
        );

        if (!pullsResponse.ok) {
          throw new Error(
            `GitHub commit pulls request failed for ${nameWithOwner}@${commit.sha} with ${pullsResponse.status}`,
          );
        }

        const associatedPullRequests = await pullsResponse.json();
        if (associatedPullRequests.length > 0) return null;

        const message = commit.commit?.message?.trim() || null;
        const headline = getCommitHeadline(message);
        const commitDate =
          commit.commit?.author?.date || commit.commit?.committer?.date;
        const metaParts = [
          commit.sha ? commit.sha.slice(0, 7) : null,
          "default branch",
          commit.commit?.verification?.verified ? "verified" : null,
        ].filter(Boolean);

        return {
          id: `commit-${nameWithOwner}-${commit.sha}`,
          type: "commit",
          typeLabel: "Commit",
          label: headline,
          title: metaParts.join(" • "),
          repo: nameWithOwner,
          url: commit.html_url || `https://github.com/${nameWithOwner}/commit/${commit.sha}`,
          occurredAt: commitDate,
        };
      }),
  );

  return directCommitItems.filter(Boolean);
}

async function fetchDirectCommitItems(collection, token, since) {
  const commitRepositories = getCommitRepositoryEntries(collection).slice(0, 8);

  const repoCommitGroups = await Promise.all(
    commitRepositories.map((entry) =>
      fetchDirectCommitsForRepository(entry.nameWithOwner, token, since).catch(
        (error) => {
          console.error(
            `GitHub direct commit fetch failed for ${entry.nameWithOwner}:`,
            error,
          );
          return [];
        },
      ),
    ),
  );

  return repoCommitGroups
    .flat()
    .sort((a, b) => new Date(b.occurredAt) - new Date(a.occurredAt))
    .slice(0, 120);
}

async function fetchPullRequestItems(token, since) {
  const createdDate = since.slice(0, 10);
  const query = `author:${GITHUB_USERNAME} is:pr is:public created:>=${createdDate}`;
  const response = await fetch(
    `https://api.github.com/search/issues?q=${encodeURIComponent(
      query,
    )}&sort=created&order=desc&per_page=100`,
    {
      headers: getGitHubHeaders(token),
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub pull request search failed with ${response.status}`);
  }

  const payload = await response.json();

  return (payload.items ?? []).map((item) => ({
    id: `search-pr-${item.id}`,
    type: "pr",
    typeLabel: "PR",
    label: `Opened PR #${item.number}`,
    title: item.title,
    repo: parseRepositoryNameFromApiUrl(item.repository_url),
    url: item.html_url,
    occurredAt: item.created_at,
  }));
}

async function fetchGitHubGraphqlActivity(token) {
  const to = new Date();
  const from = new Date(to);
  from.setFullYear(to.getFullYear() - 1);

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "boris-kirov-portfolio",
    },
    body: JSON.stringify({
      query: GITHUB_ACTIVITY_QUERY,
      variables: {
        login: GITHUB_USERNAME,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub GraphQL request failed with ${response.status}`);
  }

  const payload = await response.json();

  if (payload.errors?.length) {
    throw new Error(payload.errors[0].message);
  }

  const collection = payload.data?.user?.contributionsCollection;

  if (!collection) {
    throw new Error("GitHub contributions collection is unavailable");
  }

  const directCommitItems = await fetchDirectCommitItems(
    collection,
    token,
    from.toISOString(),
  );
  const pullRequestItems = await fetchPullRequestItems(
    token,
    from.toISOString(),
  ).catch((error) => {
    console.error("GitHub pull request search failed:", error);
    return [];
  });

  return {
    username: GITHUB_USERNAME,
    totalContributions:
      collection.contributionCalendar?.totalContributions ?? null,
    calendar: collection.contributionCalendar ?? null,
    items: formatGraphqlItems(collection, {
      commitItems: directCommitItems.length > 0 ? directCommitItems : null,
      pullRequestItems,
    }),
    graphImageUrl: getGraphImageUrl(),
    source: "graphql",
  };
}

async function fetchGitHubPublicActivity() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=100`,
    {
      headers: getGitHubHeaders(),
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub public events request failed with ${response.status}`);
  }

  const payload = await response.json();

  return {
    username: GITHUB_USERNAME,
    totalContributions: null,
    calendar: null,
    items: limitActivityItems(payload.map(formatPublicEvent).filter(Boolean)),
    graphImageUrl: getGraphImageUrl(),
    source: "public-events",
  };
}

async function fetchRepositoryDetails(repository, token) {
  const response = await fetch(
    `https://api.github.com/repos/${repository.nameWithOwner}`,
    {
      headers: getGitHubHeaders(token),
    },
  );

  if (!response.ok) {
    throw new Error(
      `GitHub repository request failed for ${repository.nameWithOwner} with ${response.status}`,
    );
  }

  const payload = await response.json();

  return {
    nameWithOwner: payload.full_name || repository.nameWithOwner,
    description: payload.description || repository.description,
    language: payload.language || repository.language,
    stargazersCount:
      payload.stargazers_count ?? repository.stargazersCount ?? null,
    forksCount: payload.forks_count ?? repository.forksCount ?? null,
    visibility: capitalize(
      payload.visibility || (payload.private ? "private" : "public"),
    ),
    url: payload.html_url || repository.url,
  };
}

export async function getRecentlyContributedRepositories() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

  const repositories = await Promise.all(
    RECENT_CONTRIBUTED_REPOSITORIES.map((repository) =>
      fetchRepositoryDetails(repository, token).catch((error) => {
        console.error(
          `GitHub repository fetch failed for ${repository.nameWithOwner}:`,
          error,
        );
        return repository;
      }),
    ),
  );

  return repositories;
}

export async function getGitHubActivity() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;

  if (token) {
    try {
      return await fetchGitHubGraphqlActivity(token);
    } catch (error) {
      console.error("GitHub GraphQL activity fetch failed:", error);
    }
  }

  try {
    return await fetchGitHubPublicActivity();
  } catch (error) {
    console.error("GitHub public activity fetch failed:", error);
  }

  return {
    username: GITHUB_USERNAME,
    totalContributions: null,
    calendar: null,
    items: [],
    graphImageUrl: getGraphImageUrl(),
    source: "fallback",
  };
}
