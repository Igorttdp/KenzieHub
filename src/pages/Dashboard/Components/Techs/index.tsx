// React
import { useContext, MouseEvent } from "react";

// Context
import { UserContext } from "../../../../context/Auth/UserContext";
import { TechsContext } from "../../../../context/Technologies/TechsContext";

const Techs = () => {
  const { deleteTech } = useContext(TechsContext);
  const { profile } = useContext(UserContext);

  return (
    <ul>
      {profile.techs.map((el, i) => {
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
                  const tech = profile.techs.find(
                    (el) => el.title === techName
                  );
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
