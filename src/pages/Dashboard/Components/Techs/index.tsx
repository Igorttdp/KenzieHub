import { useContext, MouseEvent } from "react";
import { TechsContext } from "../../../../context/Technologies/TechsContext";

const Techs = () => {
  const { techs, deleteTech } = useContext(TechsContext);

  return (
    <ul>
      {techs.map((el, i) => {
        return (
          <li key={i} aria-labelledby={el.title}>
            <h3>{el.title}</h3>

            <div>
              <span>{el.status}</span>
              <button
                onClick={(e: MouseEvent) => {
                  const el = e.target as HTMLButtonElement;
                  const techName =
                    el.parentElement?.parentElement?.getAttribute(
                      "aria-labelledby"
                    );
                  const tech = techs.find((el) => el.title === techName);
                  if (tech?.id) {
                    deleteTech(tech.id);
                  }
                }}
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Techs;
