async function Figma(req, res) {
  const notes = await fetch(
    "https://www.figma.com/api/plugins/943057200269205449/versions"
  );

  const mirotone = await fetch(
    "https://www.figma.com/api/plugins/1040629471915005702/versions"
  );

  const jsonNotes = await notes.json();
  const jsonMirotone = await mirotone.json();

  const figmaRuns =
    jsonNotes.meta.plugin.unique_run_count +
    jsonMirotone.meta.plugin.unique_run_count;
  const figmaViews =
    jsonNotes.meta.plugin.view_count + jsonMirotone.meta.plugin.view_count;
  const figmaInstalls =
    jsonNotes.meta.plugin.install_count +
    jsonMirotone.meta.plugin.install_count;
  const figmaLikes =
    jsonNotes.meta.plugin.like_count + jsonMirotone.meta.plugin.like_count;

  return res.status(200).json({
    figmaRuns,
    figmaViews,
    figmaInstalls,
    figmaLikes,
  });
}

export default Figma;
