import React from "react";
import Entry from "./Entry";

function DictCard(card) {
  return (
    <Entry
      key={card.id}
      emojiFigure={card.emoji}
      emojiName={card.name}
      emojiMeaning={card.meaning}
    />
  );
}
export default DictCard;
