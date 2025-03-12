import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const RenderButton = ({
  label,
  value,
  innerLink,
}: {
  label: string;
  value: string;
  innerLink?: boolean;
}) => {
  const router = useRouter();

  return (
    <motion.button
      className="text-xl xl:text-xl font-bold bg-black border-blue-200 border-2 rounded-3xl px-4 py-2 w-auto shadow-black shadow-xl"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      onClick={() => {
        if (innerLink) {
          router.push(`/videoDemo/${value}`);
        } else {
          window.open(value, "_blank");
        }
      }}
    >
      {label}
    </motion.button>
  );
};

export default RenderButton;
