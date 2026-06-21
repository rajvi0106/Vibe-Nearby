import PlaceCard from "./PlaceCard";

function ResultsList({ results, selectedPlaceId, onSelect }) {
  return (
    <div className="flex flex-col gap-4 p-6">
      {results.map((place, index) => {
        const placeId = place.id || index;
        return (
          <PlaceCard
            key={placeId}
            place={place}
            isSelected={selectedPlaceId === placeId}
            onClick={() => onSelect(placeId)}
          />
        );
      })}
    </div>
  );
}

export default ResultsList;