async function Npm(req, res) {
  const mirotone = await fetch(
    "https://api.npmjs.org/downloads/point/2018-01-01:2030-01-31/mirotone"
  );

  const fluiditype = await fetch(
    "https://api.npmjs.org/downloads/point/2018-01-01:2030-01-31/fluiditype"
  );

  const boriskirov = await fetch(
    "https://api.npmjs.org/downloads/point/2018-01-01:2030-01-31/boriskirov"
  );

  const fluiditypeJson = await fluiditype.json();
  const fluiditypeDownloads = fluiditypeJson.downloads;
  const fludiitypeName = fluiditypeJson.package;

  const mirotoneJson = await mirotone.json();
  const mirotoneDownloads = mirotoneJson.downloads;
  const mirotoneeName = mirotoneJson.package;

  const borisJson = await boriskirov.json();
  const borisDownloads = borisJson.downloads;

  return res.status(200).json({
    fluiditypeDownloads,
    fludiitypeName,
    mirotoneDownloads,
    mirotoneeName,
    borisDownloads,
  });
}

export default Npm;
