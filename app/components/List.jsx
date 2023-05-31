import React from "react";

const List = ({ items, completedItems, toggleCompletion }) => {
  return (
    <ul>
      {items.map((item) => (
        <div className="flex" key={item.id}>
          <li
            className={
              completedItems.includes(item.id)
                ? "pr-2 text-decoration-line: line-through"
                : "pr-2"
            }
          >
            {item.text}
          </li>
          <input
            onClick={() => toggleCompletion(item.id)}
            checked={completedItems.includes(item.id)}
            type="checkbox"
            id={item.id}
          ></input>
        </div>
      ))}
    </ul>
  );
};

export default List;

// function List({ items, completedItems, toggleCompletion }) {
//   const [completedItems, setCompletedItems] = useState([]);

//   function toggleCompletion(index) {
//     if (completedItems.includes(index)) {
//       setCompletedItems(completedItems.filter((item) => item !== index));
//     } else {
//       setCompletedItems([...completedItems, index]);
//     }
//   }

//   const listItems = task.props.map((prop, index) => (
//     <div className="flex" key={index}>
//       <li
//         className={
//           completedItems.includes(index)
//             ? "pr-2 text-decoration-line: line-through"
//             : "pr-2"
//         }
//         key={index}
//       >
//         {prop}
//       </li>
//       <input
//         onClick={() => toggleCompletion(index)}
//         checked={completedItems.includes(index)}
//         type="checkbox"
//         id={index}
//       ></input>
//     </div>
//   ));
//   return <ul>{listItems}</ul>;
// }
