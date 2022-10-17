import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Techs = () => {
  const { techs, deleteTech } = useContext(UserContext);

  return (
    <ul>
      {techs.map((el, i) => {
        return (
          <li key={i} aria-labelledby={el.title}>
            <h3>{el.title}</h3>

            <div>
              <span>{el.status}</span>
              <button
                onClick={(e) => {
                  const techName =
                    e.target.parentElement.parentElement.getAttribute(
                      "aria-labelledby"
                    );

                  const tech = techs.find(el => el.title === techName )
                  deleteTech(tech.id);
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
