import { TypeAnimation } from "react-type-animation";

const AnimatedTypeText = ({ sequence }) => {
  return (
    <TypeAnimation
      sequence={[
        ...sequence,
        () => {
          console.log("Done typing!"); // Place optional callbacks anywhere in the array
        },
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{
        fontFamily: "Lora",
        color: "var(--ternary)",
        fontSize: "2em",
        fontWeight: "bold",
      }}
    />
  );
};

export default AnimatedTypeText;
