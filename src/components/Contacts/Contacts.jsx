import PropTypes from 'prop-types';
import css from './Contacts.module.css';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, id, number }) => {
        return (
          <li className={css.item} key={id}>
            <p className={css.text}>
              {name}: {number}
            </p>
            <button
              type="button"
              className={css.button}
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
