import { AnimatePresence, motion } from "framer-motion";

export type Items = {
  id: string | number;
  subtitle: string;
  title: string;
};

type ListItemsProps = {
  items: Items[];
  selectedId: string | undefined;
  setSelectedId: (id: string) => void;
};

const ListItems = ({ items, selectedId, setSelectedId }: ListItemsProps) => (
  <motion.div layout="position">
    {items.map((item) => (
      <motion.div
        layoutId={item.id as string}
        onClick={() => setSelectedId(item.id as string)}
        key={item.id}
      >
        <motion.h5>{item.subtitle}</motion.h5>
        <motion.h2>{item.title}</motion.h2>
      </motion.div>
    ))}
  </motion.div>
);

const SelectedItem = ({ items, selectedId, setSelectedId }: ListItemsProps) => {
  const selectedItem = items?.find((item) => item.id === selectedId);

  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div layoutId={selectedItem.id as string}>
          <motion.h5>{selectedItem.subtitle}</motion.h5>
          <motion.h2>{selectedItem.title}</motion.h2>
          <motion.button
            onClick={() => setSelectedId(null || "")}
            layoutId="close-button"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function MotionComponent({
  items,
  selectedId,
  setSelectedId,
}: ListItemsProps) {
  return (
    <div>
      <ListItems
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        items={items}
      />
      <SelectedItem
        items={items}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
}
