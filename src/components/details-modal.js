const DetailsModal = ({ name, height, weight, baseExperience }) => (
  <div>
    <h1>{name}</h1>
    <ul>
      <li>
        Height: <span>{height}</span>
      </li>
      <li>
        Weight: <span>{weight}</span>
      </li>
      <li>
        Base Experience: <span>{baseExperience}</span>
      </li>
    </ul>
  </div>
);

export default DetailsModal;
