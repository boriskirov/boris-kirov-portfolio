import * as React from "react";
import Image from "next/image";
import data from "./data";

const WebStack = () => {
  return (
    <div>
      {data.map((webstack) => (
        <a
          key={webstack.name}
          className="stack-card"
          href={webstack.url}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <Image
              width={48}
              height={48}
              alt={webstack.name}
              className="stack-card-img"
              src={webstack.image}
            />
            <h6 className="headingM">{webstack.name}</h6>
          </div>
        </a>
      ))}
    </div>
  );
};

export default WebStack;

{
  /* <div>
<Link
className="stack-card"
href="https://nextjs.org/"
target="_blank"
rel="noreferrer"
>
<div>
  <Image
    alt="stack card image"
    className="stack-card-img"
    src="/nextjs.png"
    width={48}
    height={48}
  />
  <h6 className="headingM">Next.js</h6>
</div>
</Link>
<a
className="stack-card"
href="https://vercel.com/"
target="_blank"
rel="noreferrer"
>
<div>
  <Image
    alt="stack card image"
    className="stack-card-img"
    src="/vercel.png"
    width={48}
    height={48}
  />
  <h6 className="headingM">Vercel</h6>
</div>
</a>
<a
className="stack-card"
href="https://www.framer.com/motion/"
target="_blank"
rel="noreferrer"
>
<div>
  <Image
    alt="stack card image"
    className="stack-card-img"
    src="/framer.png"
    width={48}
    height={48}
  />
  <h6 className="headingM">Framer Motion</h6>
</div>
</a>
<a
className="stack-card"
href="https://www.fluiditype.com/"
target="_blank"
rel="noreferrer"
>
<div>
  <Image
    alt="stack card image"
    className="stack-card-img"
    src="/fluiditype.svg"
    width={48}
    height={48}
  />
  <h6 className="headingM">Fluiditype</h6>
</div>
</a>
<a
className="stack-card"
href="https://p3colorpicker.cool"
target="_blank"
rel="noreferrer"
>
<div>
  <Image
    alt="stack card image"
    className="stack-card-img"
    src="/p3-picker.png"
    width={48}
    height={48}
  />
  <h6 className="headingM">DCI-P3</h6>
</div>
</a>
<a
className="stack-card"
href="https://rsms.me/inter/"
target="_blank"
rel="noreferrer"
>
<div>
  <Image
    alt="stack card image"
    className="stack-card-img"
    src="/inter-logo.png"
    width={48}
    height={48}
  />
  <h6 className="headingM">Inter</h6>
</div>
</a>
<a
className="stack-card"
href="https://phosphoricons.com/"
target="_blank"
rel="noreferrer"
>
<div>
  <Image
    alt="stack card image"
    className="stack-card-img"
    src="/phosphor.png"
    width={48}
    height={48}
  />
  <h6 className="headingM">Phosphor icons</h6>
</div>
</a>
</div> */
}
