import Motion from "./Motion";
import MainWrapper from "./MainWrapper";
import Main from "./InnerWrapper";
import Metadata from "./Metadata";

/**
 * Standard page shell: motion fade-in, page wrapper, document metadata,
 * and (by default) the inner `<main>` content column.
 *
 * Pages that need a custom layout under the wrapper (full-bleed canvases,
 * dot grids, etc.) can pass `bare` to skip the inner `<main>`.
 */
export default function Page({
  title,
  description,
  image,
  name,
  bare = false,
  motion = true,
  children,
}) {
  const inner = (
    <MainWrapper>
      <Metadata
        title={title}
        description={description}
        image={image}
        name={name}
      />
      {bare ? children : <Main>{children}</Main>}
    </MainWrapper>
  );

  return motion ? <Motion>{inner}</Motion> : inner;
}
