// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

import "./Alert.css";
import clsx from "clsx";

export default function Alert({ variant, outlined, elevated, children }) {
  return (
    <p
      className={clsx("alert", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
}
