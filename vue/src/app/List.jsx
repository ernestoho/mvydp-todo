import { h } from 'preact';
import './List.css';

const List = ({ className = '', items, itemsSet, itemsRemove }) => {
  if (items.length === 0) {
    return (
      <p className={`${className} text-center`}>Yay, you have nothing to do!</p>
    );
  }
  return (
    <ul className={`${className} border-gray-300 border-b`}>
      {items.map(item => (
        <li className="flex w-full border-gray-300 border-t p-4 items-center text-sm hover:bg-white c-list-item">
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => itemsSet(item.id, !item.done)}
            className="mr-4 focus:shadow-outline focus:outline-none cursor-pointer"
            title={item.done ? `mark as not yet done` : 'mark as done'}
          />
          <span
            className={`${item.done ? `line-through` : ''} mr-4 inline-block`}
          >
            {item.title}
          </span>
          <button
            onClick={() => itemsRemove(item.id)}
            className="ml-auto text-red-600 hover:text-red-800 c-list-item__delete"
            title="delete list item"
          >
            delete list item
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
