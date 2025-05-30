import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import DraggableChat from "./wrapper/DraggableChat";
import ChatPage from "./page/ChatPage";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 5,
    },
  });

  const sensors = useSensors(pointerSensor);

  // Clamp helper
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const handleDragEnd = (event) => {
    const { delta } = event;

    const chatWidth = 200;
    const chatHeight = 100;

    const newLeft = position.left + delta.x;
    const newTop = position.top + delta.y;

    const clampedLeft = clamp(newLeft, 0, window.innerWidth - chatWidth);
    const clampedTop = clamp(newTop, 0, window.innerHeight - chatHeight);

    setPosition({ top: clampedTop, left: clampedLeft });
  };

  return (
    <Provider store={store}>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <DraggableChat position={position}>
          <ChatPage />
        </DraggableChat>
      </DndContext>
    </Provider>
  );
}
