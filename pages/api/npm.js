async function Npm(req, res) {
  // const mirotone = await fetch(
  //   "https://api.npmjs.org/downloads/point/2018-01-01:2030-01-31/mirotone"
  // );

  const fluiditype = await fetch(
    "https://api.npmjs.org/downloads/point/2018-01-01:2030-01-31/fluiditype"
  );

  const fluiditypeJson = await fluiditype.json();
  const fluiditypeDownloads = fluiditypeJson.downloads;
  const fludiitypeName = fluiditypeJson.package;

  return res.status(200).json({
    fluiditypeDownloads,
    fludiitypeName,
  });
}

export default Npm;
