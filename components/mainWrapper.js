import Header from "../components/header";

export default function MainWrapper({ children }) {
  return (
    <div className="mainWrapper">
      <Header />
      {children}
    </div>
  );
}
