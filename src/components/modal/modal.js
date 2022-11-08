import { useMemo } from "react";
import Card from "../../shared/card/Card";
import { replaceHyphenWithSpaces } from "../../utils";

const Modal = ({ isOpen, onClose, nominees = {} }) => {
  /*
   * (prevent uneccessary render - only renders when isOpen changes)
   * Memoize the value of the accessibility object.
   */
  const accessibility = useMemo(() => {
    let value = {
      "aria-hidden": true,
    };

    if (isOpen) {
      value = {
        role: "dialog",
        "aria-modal": true,
        "aria-labelledby": "modal",
        "aria-describedby": "modal",
      };
    }

    return value;
  }, [isOpen]);

  return (
    <div className={`modal fade ${isOpen ? "show" : ""}`} {...accessibility}>
      <div className="modal__overlay" />
      <div className="modal__dialog">
        <header className="modal__header">
          <button
            type="button"
            className="modal__button__close"
            onClick={onClose}
          >
            &times;
          </button>
        </header>

        <div className="modal__content">
          <ul className="modal__group">
            {Object.entries(nominees).map(([key, nominee]) => (
              <li className="modal__group__list" key={key}>
                <h3 className="modal__group__list__title">
                  {replaceHyphenWithSpaces(key)}:{" "}
                </h3>
                <Card
                  ballot={nominee}
                  selected={{}}
                  showSelectButton={false}
                  id={key}
                  onSelected={() => {}}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
