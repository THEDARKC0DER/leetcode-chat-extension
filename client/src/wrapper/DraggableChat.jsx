import { useDraggable } from "@dnd-kit/core";

export default function DraggableChat({ position, children }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: "chat-bubble" });

  const style = {
    all: "unset",
    position: "fixed",
    top: `${position.top}px`,
    left: `${position.left}px`,
    zIndex: 9999,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    backgroundColor: 'black',
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "8px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
    cursor: isDragging ? "grabbing" : "grab",
    width: "300px",
    // reset everything first

    // set white text explicitly again
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
