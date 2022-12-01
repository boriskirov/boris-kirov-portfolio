async function Figma(req, res) {
  const figma = await fetch(
    "https://www.figma.com/api/plugins/943057200269205449/versions"
  );

  const json = await figma.json();
  const figmaRuns = json.meta.plugin.unique_run_count;
  const figmaViews = json.meta.plugin.view_count;
  const figmaDateCreated = json.meta.plugin.created_at;
  const figmaLikes = json.meta.plugin.like_count;

  return res.status(200).json({
    figmaRuns,
    figmaViews,
    figmaDateCreated,
    figmaLikes,
  });
}

export default Figma;
