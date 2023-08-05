import { useState } from "react";

const Section = ({ title, description, isVisible, setVisibleSection }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => {
            setVisibleSection(null);
          }}
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => {
            setVisibleSection(title);
          }}
        >
          Show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  return (
    <div>
      <h1 className="text-3xl font-bold p-2 m-2"> Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"This is the about section"}
        isVisible={visibleSection === "About Instamart"}
        setVisibleSection={setVisibleSection}
      />
      <Section
        title={"Team Instamart"}
        description={"Instamart is a new small team with 50 members"}
        isVisible={visibleSection === "Team Instamart"}
        setVisibleSection={setVisibleSection}
      />
      <Section
        title={"Careers at Instamart"}
        description={"Instamart is a new small team with 50 members"}
        isVisible={visibleSection === "Careers at Instamart"}
        setVisibleSection={setVisibleSection}
      />
    </div>
  );
};

export default Instamart;
